export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = req.body;
    
    // For now, just log the contact form submission
    console.log('Contact form submission:', { name, email, phone, message });
    
    // Return success response
    res.status(200).json({ message: 'Message received successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ message: 'Error processing request', error: error.message });
  }
}
