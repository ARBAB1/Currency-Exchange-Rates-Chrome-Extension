# Currency Exchange Rates Chrome Extension

A simple and intuitive Chrome Extension that displays the latest currency exchange rates for PKR, USD, GBP, and AED. This extension provides real-time data in an easy-to-read table format.

## Features

- Real-time currency exchange rates.
- Sleek and user-friendly interface.
- Lightweight and fast.
- Displays exchange rates for:
  - **PKR (Pakistani Rupee)**
  - **USD (US Dollar)**
  - **GBP (British Pound)**
  - **AED (United Arab Emirates Dirham)**

## Screenshots

![Extension Screenshot](./screenshots/currency-extension.png)

## Installation

1. Clone or download this repository.
   ```bash
   git clone https://github.com/yourusername/Currency-Exchange-Rates-Chrome-Extension.git

2. Open Chrome and navigate to chrome://extensions/.

3. Enable Developer mode in the top right corner.

4. Click on the Load unpacked button and select the folder where you cloned/downloaded the repository.

5. The extension should now be added to Chrome, and you can access it from the extensions menu.


## How to Use

After installing the extension, click on the extension icon in your Chrome browser toolbar.
A small popup will open displaying the latest currency exchange rates for PKR, USD, GBP, and AED.

## Folder Structure

```

Currency-Exchange-Rates-Chrome-Extension/
│
├── manifest.json     # Chrome Extension manifest file
├── index.html        # HTML file for the extension popup
├── script.js         # JavaScript file that fetches exchange rates and updates the UI
├── style.css         # Stylesheet for the popup interface
├── icons/            # Icons used for the extension
└── README.md         # This file
```

## Dependencies
Bootstrap 5: For responsive and sleek design.
Open Exchange Rates API (or any similar service): To fetch real-time currency exchange rates.

## API Configuration
To fetch real-time exchange rates, you can use an API like Open Exchange Rates. You will need an API key, which you can configure in the script.js file.

Example configuration:
```js
const apiKey = 'YOUR_API_KEY';
const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;
```

Replace YOUR_API_KEY with your actual API key.

## Future Enhancements
- Add more currencies.
- Add customization for preferred currencies.
- Option to refresh exchange rates manually.

## Contributing
Feel free to submit issues and pull requests for new features, improvements, or bug fixes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.


### Key Sections Explained:
1. **Features:** Highlights the key features of the extension.
2. **Installation:** Explains how to install the extension in Chrome.
3. **How to Use:** Quick instructions on using the extension.
4. **API Configuration:** Provides guidance on setting up the API for real-time data fetching.
5. **Future Enhancements:** A section for potential future improvements.

This README gives clear instructions to users and contributors.


