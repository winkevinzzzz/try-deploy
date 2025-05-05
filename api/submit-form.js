
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, message } = req.body;
    res.status(200).json({ success: true, received: { name, message } });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
