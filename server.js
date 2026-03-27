'use strict';

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── Demo data ──────────────────────────────────────────────────────────────
const DEMO_DATA = {
  channels: [
    { name: 'organic-seo',  avgLtv: 840,  avgTenureMonths: 8.4,  totalRevenue: 42000, customerCount: 50 },
    { name: 'twitter-ads',  avgLtv: 320,  avgTenureMonths: 3.2,  totalRevenue:  9600, customerCount: 30 },
    { name: 'product-hunt', avgLtv: 280,  avgTenureMonths: 2.8,  totalRevenue:  5600, customerCount: 20 },
    { name: 'referral',     avgLtv: 1120, avgTenureMonths: 11.2, totalRevenue: 22400, customerCount: 20 },
    { name: 'direct',       avgLtv: 460,  avgTenureMonths: 4.6,  totalRevenue: 18400, customerCount: 40 }
  ],
  summary: {
    totalCustomers: 160,
    bestChannel: 'referral',
    worstChannel: 'product-hunt',
    globalAvgLtv: 610
  }
};

// ── Page routes ────────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/demo', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'demo.html'));
});

// /dashboard is an alias for /demo
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'demo.html'));
});

app.get('/docs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'docs.html'));
});

// ── API routes ─────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', version: '0.1.0' });
});

app.get('/api/demo-data', (req, res) => {
  res.json(DEMO_DATA);
});

app.post('/api/connect', (req, res) => {
  // Stub Stripe OAuth — in production this initiates the OAuth flow
  const { stripeKey } = req.body || {};
  if (!stripeKey) {
    return res.status(400).json({ status: 'error', message: 'stripeKey is required' });
  }
  res.json({ status: 'connected', message: 'Stripe connected (demo mode)' });
});

// ── Start ──────────────────────────────────────────────────────────────────
app.listen(PORT, '0.0.0.0', () => {
  console.log(`LTVChannel running on http://0.0.0.0:${PORT}`);
});
