const countries = {
  "AX": "Aland Islands",
  "AF": "Afghanistan",
  "AL": "Albania",
  "DZ": "Algeria",
  "AS": "American Samoa",
  "AD": "Andorra",
  "AO": "Angola",
  "AI": "Anguilla",
  "AQ": "Antarctica",
  "AG": "Antigua And Barbuda",
  "AR": "Argentina",
  "AM": "Armenia",
  "AW": "Aruba",
  "AU": "Australia",
  "AT": "Austria",
  "AZ": "Azerbaijan",
  "BS": "Bahamas",
  "BH": "Bahrain",
  "BD": "Bangladesh",
  "BB": "Barbados",
  "BY": "Belarus",
  "BE": "Belgium",
  "BZ": "Belize",
  "BJ": "Benin",
  "BM": "Bermuda",
  "BT": "Bhutan",
  "BO": "Bolivia",
  "BQ": "Bonaire, Sint Eustatius and Saba",
  "BA": "Bosnia And Herzegovina",
  "BW": "Botswana",
  "BR": "Brazil",
  "IO": "Indian Ocean Territory",
  "BN": "Brunei",
  "BG": "Bulgaria",
  "BF": "Burkina Faso",
  "BI": "Burundi",
  "KH": "Cambodia",
  "CM": "Cameroon",
  "CA": "Canada",
  "CV": "Cape Verde",
  "KY": "Cayman Islands",
  "CF": "Central Africa",
  "TD": "Chad",
  "CL": "Chile",
  "CN": "China Mainland",
  "CX": "Christmas Island",
  "CC": "Cocos Islands",
  "CO": "Colombia",
  "KM": "Comoros",
  "CD": "Congo, Democratic Republic of the",
  "CG": "Congo, Republic of the",
  "CK": "Cook Islands",
  "CR": "Costa Rica",
  "CI": "Cote D'ivoire",
  "HR": "Croatia",
  "CU": "Cuba",
  "CW": "Curaçao",
  "CY": "Cyprus",
  "CZ": "Czech Republic",
  "DK": "Denmark",
  "DJ": "Djibouti",
  "DM": "Dominica",
  "DO": "Dominican Republic",
  "EC": "Ecuador",
  "EG": "Egypt",
  "SV": "El Salvador",
  "GQ": "Equatorial Guinea",
  "ER": "Eritrea",
  "EE": "Estonia",
  "ET": "Ethiopia",
  "FK": "Falkland Islands",
  "FO": "Faroe Islands",
  "FJ": "Fiji",
  "FI": "Finland",
  "FR": "France",
  "GF": "French Guiana",
  "PF": "French Polynesia",
  "TF": "French Southern Territories",
  "GA": "Gabon",
  "GM": "The Gambia",
  "GE": "Georgia",
  "DE": "Germany",
  "GH": "Ghana",
  "GI": "Gibraltar",
  "GR": "Greece",
  "GL": "Greenland",
  "GD": "Grenada",
  "GP": "Guadaloupe",
  "GU": "Guam",
  "GT": "Guatemala",
  "GG": "Guernsey",
  "GN": "Guinea",
  "GW": "Guinea-Bissau",
  "GY": "Guyana",
  "HT": "Haiti",
  "HM": "Heard Island &amp; McDonald Islands",
  "VA": "Holy See",
  "HN": "Honduras",
  "HK": "Hong Kong S.A.R",
  "HU": "Hungary",
  "IS": "Iceland",
  "IN": "India",
  "ID": "Indonesia",
  "IR": "Iran",
  "IQ": "Iraq",
  "IE": "Ireland",
  "IM": "Isle Of Man",
  "IL": "Israel",
  "IT": "Italy",
  "JM": "Jamaica",
  "JP": "Japan",
  "JE": "Jersey",
  "JO": "Jordan",
  "KZ": "Kazakhstan",
  "KE": "Kenya",
  "KI": "Kiribati",
  "KP": "Korea, Democratic People's Republic of",
  "KR": "Korea, Republic of",
  "KW": "Kuwait",
  "KG": "Kyrgyzstan",
  "LA": "Lao People's Democratic Republic",
  "LV": "Latvia",
  "LB": "Lebanon",
  "LS": "Lesotho",
  "LR": "Liberia",
  "LY": "Libya",
  "LI": "Liechtenstein",
  "LT": "Lithuania",
  "LU": "Luxembourg",
  "MO": "Macau S.A.R",
  "MK": "Macedonia",
  "MG": "Madagascar",
  "MW": "Malawi",
  "MY": "Malaysia",
  "MV": "Maldives",
  "ML": "Mali",
  "MT": "Malta",
  "MH": "Marshall Islands",
  "MQ": "Martinique",
  "MR": "Mauritania",
  "MU": "Mauritius",
  "YT": "Mayotte",
  "MX": "Mexico",
  "FM": "Micronesia",
  "MD": "Moldova",
  "MC": "Monaco",
  "MN": "Mongolia",
  "ME": "Montenegro",
  "MS": "Montserrat",
  "MA": "Morocco",
  "MZ": "Mozambique",
  "MM": "Myanmar",
  "NA": "Namibia",
  "NR": "Nauru",
  "NP": "Nepal",
  "NL": "Netherlands",
  "NC": "New Caledonia",
  "NZ": "New Zealand",
  "NI": "Nicaragua",
  "NE": "Niger",
  "NG": "Nigeria",
  "NU": "Niue",
  "NF": "Norfolk Island",
  "MP": "Northern Mariana Islands",
  "NO": "Norway",
  "OM": "Oman",
  "PK": "Pakistan",
  "PW": "Palau",
  "PS": "Palestine, State of",
  "PA": "Panama",
  "PG": "Papua New Guinea",
  "PY": "Paraguay",
  "PE": "Peru",
  "PH": "Philippines",
  "PN": "Pitcairn Islands",
  "PL": "Poland",
  "PT": "Portugal",
  "PR": "Puerto Rico",
  "QA": "Qatar",
  "RE": "Reunion",
  "RO": "Romania",
  "RU": "Russian Federation",
  "RW": "Rwanda",
  "BL": "Saint Barthélemy",
  "SH": "Saint Helena",
  "KN": "Saint Kitts And Nevis",
  "LC": "Saint Lucia",
  "MF": "Saint Martin",
  "VC": "Saint Vincent And The Grenadines",
  "PM": "Saint-Pierre Et Miquelon",
  "WS": "Samoa",
  "SM": "San Marino",
  "ST": "Sao Tome and Principe",
  "SA": "Saudi Arabia",
  "SN": "Senegal",
  "RS": "Serbia, Republic of",
  "SC": "Seychelles",
  "SL": "Sierra Leone",
  "SG": "Singapore",
  "SX": "Sint Maarten",
  "SK": "Slovakia",
  "SI": "Slovenia",
  "SB": "Solomon Islands",
  "SO": "Somalia",
  "ZA": "South Africa",
  "GS": "South Georgia & S. Sandwich Islands",
  "SS": "South Sudan",
  "ES": "Spain",
  "LK": "Sri Lanka",
  "SD": "Sudan",
  "SR": "Suriname",
  "SJ": "Svalbard and Jan Mayen",
  "SZ": "Swaziland",
  "SE": "Sweden",
  "CH": "Switzerland",
  "SY": "Syria",
  "TW": "Taiwan",
  "TJ": "Tajikistan",
  "TZ": "Tanzania, United Republic of",
  "TH": "Thailand",
  "TL": "Timor-Leste",
  "TG": "Togo",
  "TK": "Tokelau",
  "TO": "Tonga",
  "TT": "Trinidad And Tobago",
  "TN": "Tunisia",
  "TR": "Turkey",
  "TM": "Turkmenistan",
  "TC": "Turks And Caicos Islands",
  "TV": "Tuvalu",
  "UG": "Uganda",
  "UA": "Ukraine",
  "AE": "United Arab Emirates",
  "GB": "United Kingdom",
  "US": "United States",
  "UM": "United States Minor Outlying Islands",
  "UY": "Uruguay",
  "UZ": "Uzbekistan",
  "VU": "Vanuatu",
  "VE": "Venezuela",
  "VN": "Vietnam",
  "VG": "UK Virgin Islands",
  "VI": "US Virgin Islands",
  "WF": "Wallis and Futuna",
  "EH": "Western Sahara",
  "YE": "Yemen",
  "ZM": "Zambia",
  "ZW": "Zimbabwe"
}

let locales = '';

function validateTerms(element, formSubmitted) {
  if (!formSubmitted) return true;
  return element.checked ? true : false;
}

function validateField(element, formSubmitted) {
  if (!formSubmitted) return true;
  return !!element.value;
}

function validateSelect(element, formSubmitted) {
  if (!formSubmitted) return true;
  return element.value.length > 1;
}

function validateDate(element, formSubmitted) {
  if (!formSubmitted) return true;

  if (!/^\d{2}-\d{2}-\d{4}$/.test(element.value)) return false;

  let parts = element.value.split('-');
  let dob = locales.includes('us')
    ? new Date(parts[2], parts[0] - 1, parts[1])
    : new Date(parts[2], parts[1] - 1, parts[0]);

  const minAge = locales.includes('us') ? 21 : 18;
  const maxAge = 120;
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  let m = today.getMonth() - dob.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  const year = parseInt(parts[2], 10);
  const month = parseInt(parts[locales.includes('us') ? 0 : 1], 10);
  const day = parseInt(parts[locales.includes('us') ? 1 : 0], 10);

  if (year < 1900 || year > today.getFullYear() || month < 1 || month > 12 || day < 1 || day > 31) {
    return false;
  }

  const daysInMonth = new Date(year, month, 0).getDate();
  if (day > daysInMonth || isNaN(month) || isNaN(day) || isNaN(year)) {
    return false;
  }

  if (age < minAge || age > maxAge) {
    return false;
  }

  return true;
}

function updateLocaleBasedUI() {
  const zipCodeGroup = document.getElementById('zip-code-group');
  const zipCodeInput = document.getElementById('zip-code');
  const countryGroup = document.getElementById('country-group');

  if (locales.includes('us')) {
    if (zipCodeGroup) {
      zipCodeGroup.style.display = 'block'
    }
  } else {
    if (countryGroup) {
      countryGroup.style.display = 'block'
    }
    if (zipCodeInput) {
      zipCodeInput.value = 'na'
    }
    if (zipCodeGroup) {
      zipCodeGroup.style.display = 'block'
      zipCodeGroup.remove()
    }

    document.getElementById('dob').placeholder = 'DD-MM-YYYY';

    const termsLabelContent = document.getElementById('terms-label-content');
    const newsletterLabelContent = document.getElementById('newsletter-label-content');

    if (termsLabelContent && newsletterLabelContent) {
      if (locales.includes('au')) {
        termsLabelContent.innerHTML = "I agree to the <a href='https://footer.diageohorizon.com/dfs/assets/www.johnniewalker.com/www.johnniewalker.com_en-au_final_TnC.html?locale=en-au'>Terms & Conditions</a> and <a href='https://footer.diageohorizon.com/dfs/assets/www.johnniewalker.com/PrivacyPolicy_en.html?locale=en-au'>Privacy & Cookie Notice</a>.*";
        newsletterLabelContent.innerHTML = "Tick here if you would like us to use your email to keep you informed about products, services and events from Johnnie Walker & other Diageo brands. We’ll occasionally send you messages and show you ads for things that we think may be of interest. By signing up, you accept Diageo's <a href='https://footer.diageohorizon.com/dfs/assets/www.johnniewalker.com/www.johnniewalker.com_en-au_final_TnC.html?locale=en-au'>Conditions of Use</a> and acknowledge the <a href='https://footer.diageohorizon.com/dfs/assets/www.johnniewalker.com/PrivacyPolicy_en.html?locale=en-au'>Privacy & Cookie Notice</a>. Please see the ‘Disclosure of your personal data’ section of our <a href='https://footer.diageohorizon.com/dfs/assets/www.johnniewalker.com/PrivacyPolicy_en.html?locale=en-au'>Privacy & Cookie Notice</a> for further information on how we share your data with our marketing partners. You can unsubscribe at any time.";
      }
      if (locales.includes('gb')) {
        termsLabelContent.innerHTML = "I accept Diageo's <a href='https://footer.diageohorizon.com/dfs/assets/www.johnniewalker.com/www.johnniewalker.com_en-gb_final_TnC.html?locale=en-gb'>Conditions of Use</a> and acknowledge the <a href='https://footer.diageohorizon.com/dfs/assets/www.johnniewalker.com/PrivacyPolicy_en.html?locale=en-gb'>Privacy & Cookie Notice</a>.*";
        newsletterLabelContent.innerHTML = "Tick here if you would like us to use your email to keep you informed about products, services and events from Johnnie Walker & other Diageo brands. We’ll occasionally send you messages and show you ads for things that we think may be of interest. By signing up, you accept Diageo's <a href='https://footer.diageohorizon.com/dfs/assets/www.johnniewalker.com/www.johnniewalker.com_en-gb_final_TnC.html?locale=en-gb'>Conditions of Use</a> and acknowledge the <a href='https://footer.diageohorizon.com/dfs/assets/www.johnniewalker.com/PrivacyPolicy_en.html?locale=en-gb'>Privacy & Cookie Notice</a>. Please see the ‘Disclosure of your personal data’ section of our <a href='https://footer.diageohorizon.com/dfs/assets/www.johnniewalker.com/PrivacyPolicy_en.html?locale=en-gb'>Privacy & Cookie Notice</a> for further information on how we share your data with our marketing partners. You can unsubscribe at any time.";
      }
      if (locales.includes('es')) {
        termsLabelContent.innerHTML = "Reconozco y acepto las <a href='https://footer.diageohorizon.com/dfs/assets/www.johnniewalker.com/www.johnniewalker.com_es-pr_final_TnC.html?locale=es-pr'>Condiciones de Uso</a> y la Política de <a href='https://footer.diageohorizon.com/dfs/assets/www.johnniewalker.com/PrivacyPolicy_es.html?locale=es-pr'>Privacidad y Cookies</a> de Diageo.*";
        newsletterLabelContent.innerHTML = "Marque esta casilla si desea que utilicemos su correo electrónico para mantenerle informado sobre productos, servicios y eventos de Johnnie Walker y otras marcas de Diageo. Puntualmente le enviaremos mensajes y le mostraremos anuncios sobre temas que pensamos pueden ser de su interés.";
      }
      if (locales.includes('br')) {
        termsLabelContent.innerHTML = "Eu reconheço e estou de acordo com as <a href='https://footer.diageohorizon.com/dfs/assets/www.johnniewalker.com/www.johnniewalker.com_pt-br_final_TnC.html?locale=pt-br'>Condições de Uso</a> e a Polícia de <a href='https://footer.diageohorizon.com/dfs/assets/www.johnniewalker.com/PrivacyPolicy_pt.html?locale=pt-br'>Privacidade e Cookies</a> da Diageo.*";
        newsletterLabelContent.innerHTML = "Ao clicar você concorda em receber e-mails e outras comunicações sobre os produtos, serviços e eventos do Johnnie Walker e outras marcas da Diageo. Eventualmente nós enviaremos mensagens e mostraremos anúncios de produtos e promoções que podem ser do seu interesse.";
      }
    }
  }
}

function createCountries(locales) {
  const countrySelect = document.getElementById('country-code')
  if (countrySelect) {
    Object.entries(countries).forEach(([code, label]) => {
      const option = document.createElement('option');
      option.value = code;
      option.textContent = label;
      countrySelect.appendChild(option);
    })

    if (locales.length) {
      const [lang, code] = locales.split('-')
      if (code && code.length && countries.hasOwnProperty(code.toUpperCase())) {
        countrySelect.value = code.toUpperCase()
        countrySelect.dispatchEvent(new Event('change'))
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  locales = new URLSearchParams(window.location.search).get('ui_locales').toLowerCase();
  document.getElementById('_ui_locales').value = locales;
  createCountries(locales);
  updateLocaleBasedUI();
  document.getElementById('dob').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.slice(0, 2) + '-' + value.slice(2);
    }
    if (value.length > 5) {
      value = value.slice(0, 5) + '-' + value.slice(5);
    }
    e.target.value = value.slice(0, 10);
  });
});
