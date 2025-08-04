# EOXS Order Comparison System

An AI-powered document comparison tool that compares Sales Orders with Purchase Orders to identify discrepancies and matches.

## Features

- **AI-Powered Analysis**: Uses Google Gemini AI to intelligently compare documents
- **ERP Integration**: Connects to Odoo ERP system to fetch Sales Order PDFs
- **Document Upload**: Supports manual upload of Purchase Order files (PDF, images, CSV, Excel)
- **Detailed Comparison**: Provides item-by-item comparison with status indicators
- **Discrepancy Detection**: Identifies mismatches in quantities, prices, and terms
- **Export Functionality**: Export comparison results as PDF reports

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **AI**: Google Gemini 1.5 Flash via Genkit
- **ERP Integration**: Odoo XML-RPC and HTTP APIs
- **PDF Processing**: html2canvas, jsPDF

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Google AI API key
- Odoo ERP system access

## Environment Variables

1. **Copy the example file**:
   ```bash
   cp .env.example .env
   ```

2. **Edit the `.env` file** with your actual credentials:
   ```env
   # Google AI API
   GOOGLE_API_KEY=your_actual_google_api_key_here
   
   # ERP System (Odoo)
   ODOO_URL=https://your-odoo-instance.com
   ODOO_DB=your_database_name
   ODOO_USERNAME=your_username
   ODOO_PASSWORD="your_password"
   ```

### Getting API Keys:

- **Google AI API Key**: 
  1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
  2. Create a new API key
  3. Copy and paste it into your `.env` file

- **ERP Credentials**: Contact your system administrator for the correct ERP connection details.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git
   cd REPOSITORY_NAME
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Copy the `.env` template above
   - Add your actual API keys and ERP credentials

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:9002](http://localhost:9002)

## Usage

1. **Enter Sales Order Identifier**: Input the sales order name/number
2. **Upload Purchase Order Files**: Select one or more PO documents
3. **Start Comparison**: The system will fetch the SO from ERP and compare with uploaded POs
4. **Review Results**: View detailed comparison with discrepancies and matches
5. **Export Report**: Download the comparison as a PDF report

## API Endpoints

- `POST /api/compare-orders`: Compare sales and purchase orders
- Server Actions: Handle file uploads and ERP integration

## Development

- **AI Development**: `npm run genkit:dev`
- **Type Checking**: `npm run typecheck`
- **Linting**: `npm run lint`
- **Build**: `npm run build`

## Project Structure

```
src/
├── ai/                    # AI flows and Genkit configuration
├── app/                   # Next.js app router pages and API
├── components/            # React components and UI library
├── hooks/                 # Custom React hooks
└── lib/                   # Utility functions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

[Add your license here]

## Support

For support, please contact the development team.
