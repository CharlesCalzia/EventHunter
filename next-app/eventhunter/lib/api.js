import { google } from 'googleapis';
import marked from 'marked';
const renderer = new marked.Renderer();
renderer.link = (href, title, text) =>
  `<a target="_blank" rel="noopener noreferrer" href="${href}" title="${
    title || ''
  }">${text}</a>`;

export async function getWhyNextReasons() {
  try {
    const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes,
    });

    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Sheet1',
    });

    const rows = response.data.values.slice(0,9);

    if (rows.length) {
      return rows.map((row) => ({
        title: row[0]
      }));
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}
