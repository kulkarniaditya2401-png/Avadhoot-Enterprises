const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure upload and database folders exist
const UPLOADS_DIR = path.join(__dirname, 'uploads');
const DATA_DIR = path.join(__dirname, 'data');

if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Serve uploaded files statically if needed
app.use('/uploads', express.static(UPLOADS_DIR));

// Setup Multer for Career Resume Uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_DIR);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit 5MB
    fileFilter: (req, file, cb) => {
        const allowedTypes = /pdf|doc|docx/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error('Only .pdf, .doc, and .docx formats are allowed.'));
        }
    }
});

// Helper function to read/write database files
const readDataFile = (filename, defaultVal = []) => {
    const filePath = path.join(DATA_DIR, filename);
    if (!fs.existsSync(filePath)) {
        return defaultVal;
    }
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(`Error reading ${filename}:`, err);
        return defaultVal;
    }
};

const writeDataFile = (filename, data) => {
    const filePath = path.join(DATA_DIR, filename);
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        return true;
    } catch (err) {
        console.error(`Error writing ${filename}:`, err);
        return false;
    }
};

// ==========================================================================
// API ENDPOINTS
// ==========================================================================

// 1. Get Machinery & Assets
app.get('/api/machinery', (req, res) => {
    const machinery = [
        { id: 1, name: "Vertical Machining Centres (VMC)", make: "BFW", application: "High-Accuracy Milling & Machining" },
        { id: 2, name: "EDM Wire Cut Machines (EDM-WC)", make: "REIPL", application: "Critical Micro-Machining & Wire Cut" },
        { id: 3, name: "EDM Drill Machine (EDM-DRL)", make: "REIPL", application: "High Penetration Micro Drilling" },
        { id: 4, name: "CNC Turning Machine", make: "Ace", application: "Precision Turning & Threading Operations" },
        { id: 5, name: "Lathe Machine", make: "General Asset", application: "Standard Turning & Metal Facing Work" },
        { id: 6, name: "Surface Grinder", make: "General Asset", application: "Flat Surface Micro Finishing" },
        { id: 7, name: "Drill Machines", make: "General Asset", application: "General Drilling and Tapping Work" }
    ];
    res.json(machinery);
});

// 2. Get Precision Measuring Instruments (PMI)
app.get('/api/pmi', (req, res) => {
    const pmi = [
        { id: 1, name: "Digital Height Gauge", description: "High precision dimensional measurements", range: "0 - 600 mm" },
        { id: 2, name: "Surface Plate", description: "Flatness verification baseline reference", range: "Grade A" },
        { id: 3, name: "Digital Verniers", description: "Standard outer/inner depth measurements", range: "200 / 300 mm" },
        { id: 4, name: "Micrometres", description: "Precision thickness/diameter gauges", range: "25 / 50 / 75 mm" },
        { id: 5, name: "Dial Gauges", description: "Runout and profile deviation testing", range: "0 - 0.2 mm" },
        { id: 6, name: "Thread, Plug, Radius & Bore", description: "Standardized go/no-go quality checks", range: "Full Metric Set" }
    ];
    res.json(pmi);
});

// 3. Post Contact Quote Inquiries
app.post('/api/contact', (req, res) => {
    const { name, email, phone, company, message } = req.body;
    
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
    }

    const inquiries = readDataFile('inquiries.json');
    const newInquiry = {
        id: Date.now().toString(),
        name,
        email,
        phone: phone || '',
        company: company || '',
        message,
        date: new Date().toISOString()
    };

    inquiries.push(newInquiry);
    writeDataFile('inquiries.json', inquiries);

    console.log(`[New Quote Inquiry] Received from ${name} (${company || 'N/A'}) - Email: ${email}`);

    res.json({ success: true, message: 'Your quote request has been recorded. Our team will contact you shortly.' });
});

// 4. Post Career Applications
app.post('/api/careers', upload.single('resume'), (req, res) => {
    const { name, email, phone, role } = req.body;

    if (!name || !email || !role) {
        return res.status(400).json({ success: false, message: 'Name, email, and position applied are required.' });
    }

    const applications = readDataFile('applications.json');
    const newApplication = {
        id: Date.now().toString(),
        name,
        email,
        phone: phone || '',
        role,
        resumeFilename: req.file ? req.file.filename : null,
        resumePath: req.file ? `/uploads/${req.file.filename}` : null,
        date: new Date().toISOString()
    };

    applications.push(newApplication);
    writeDataFile('applications.json', applications);

    console.log(`[New Application] Received from ${name} for position ${role}. Resume stored: ${req.file ? req.file.filename : 'None'}`);

    res.json({ success: true, message: 'Application submitted successfully! Our HR team will evaluate your CV.' });
});

// Error handler for Multer upload issues
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        return res.status(400).json({ success: false, message: `Upload error: ${err.message}` });
    } else if (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
    next();
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start Server
app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(` Avadhoot Enterprises API Backend Running`);
    console.log(` Port: ${PORT}`);
    console.log(` Mode: Development`);
    console.log(`==================================================`);
});
