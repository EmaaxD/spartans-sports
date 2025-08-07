import { NextApiRequest, NextApiResponse } from 'next';
import { generateTemplate } from '@src/utils/functions';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { templateType } = req.query;

  if (!templateType || typeof templateType !== 'string') {
    return res.status(400).json({ error: 'Template type is required' });
  }

  try {
    const templateData = generateTemplate(templateType);

    if (!templateData) {
      return res.status(404).json({ error: 'Template not found' });
    }

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename="${templateType}-template.xlsx"`);
    
    return res.send(Buffer.from(templateData));
  } catch (error) {
    console.error('Error generating template:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
