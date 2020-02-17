export const getAlphabet = () => {
    let data =
        { A:
                [ { name: 'Afghanistan', code: '+93', iso3: 'AFG'},
                    { name: 'Aland Islands', code: '+358', iso3: 'ALA'},
                    { name: 'Albania', code: '+355', iso3: 'ALB'},
                    { name: 'Algeria', code: '+213', iso3: 'DZA'},
                    { name: 'AmericanSamoa', code: '+1684', iso3: 'ASM'},
                    { name: 'Andorra', code: '+376', iso3: 'AND'},
                    { name: 'Angola', code: '+244', iso3: 'AGO'},
                    { name: 'Anguilla', code: '+1264', iso3: 'AIA'},
                    { name: 'Antarctica', code: '+672', iso3: 'ATA'},
                    { name: 'Antigua and Barbuda', code: '+1268', iso3: 'ATG'},
                    { name: 'Argentina', code: '+54', iso3: 'ARG' },
                    { name: 'Armenia', code: '+374', iso3: 'ARM' },
                    { name: 'Aruba', code: '+297', iso3: 'ABW' },
                    { name: 'Australia', code: '+61', iso3: 'AUS' },
                    { name: 'Austria', code: '+43', iso3: 'AUT' },
                    { name: 'Azerbaijan', code: '+994', iso3: 'AZE' } ],
            B:
                [ { name: 'Bahamas', code: '+1242', iso3: 'BHS' },
                    { name: 'Bahrain', code: '+973', iso3: 'BHR' },
                    { name: 'Bangladesh', code: '+880', iso3: 'BGD' },
                    { name: 'Barbados', code: '+1246', iso3: 'BRB' },
                    { name: 'Belarus', code: '+375', iso3: 'BLR' },
                    { name: 'Belgium', code: '+32', iso3: 'BEL' },
                    { name: 'Belize', code: '+501', iso3: 'BLZ' },
                    { name: 'Benin', code: '+229', iso3: 'BEN' },
                    { name: 'Bermuda', code: '+1441', iso3: 'BMU' },
                    { name: 'Bhutan', code: '+975', iso3: 'BTN' },
                    { name: 'Bolivia, Plurinational State of', code: '+591', iso3: 'BOL' },
                    { name: 'Bosnia and Herzegovina', code: '+387', iso3: 'BIH' },
                    { name: 'Botswana', code: '+267', iso3: 'BWA' },
                    { name: 'Bouvet Island', code: '+0', iso3: 'BVT' },
                    { name: 'Brazil', code: '+55', iso3: 'BRA' },
                    { name: 'British Indian Ocean Territory', code: '+246', iso3: 'IOT' },
                    { name: 'Brunei Darussalam', code: '+673', iso3: 'BRN' },
                    { name: 'Bulgaria', code: '+359', iso3: 'BGR' },
                    { name: 'Burkina Faso', code: '+226', iso3: 'BFA' },
                    { name: 'Burundi', code: '+257', iso3: 'BDI' } ],
            C:
                [ { name: 'Cambodia', code: '+855', iso3: 'KHM' },
                    { name: 'Cameroon', code: '+237', iso3: 'CMR' },
                    { name: 'Canada', code: '+1', iso3: 'CAN' },
                    { name: 'Cape Verde', code: '+238', iso3: 'CPV' },
                    { name: 'Cayman Islands', code: '+345', iso3: 'CYM' },
                    { name: 'Central African Republic', code: '+236', iso3: 'CAF' },
                    { name: 'Chad', code: '+235', iso3: 'TCD' },
                    { name: 'Chile', code: '+56', iso3: 'CHL' },
                    { name: 'China', code: '+86', iso3: 'CHN' },
                    { name: 'Christmas Island', code: '+61', iso3: 'CXR' },
                    { name: 'Cocos (Keeling) Islands', code: '+61', iso3: 'CCK' },
                    { name: 'Colombia', code: '+57', iso3: 'COL' },
                    { name: 'Comoros', code: '+269', iso3: 'COM' },
                    { name: 'Congo', code: '+242', iso3: 'COG' },
                    { name: 'Congo, The Democratic Republic of the Congo', code: '+243', iso3: 'COD' },
                    { name: 'Cook Islands', code: '+682', iso3: 'COK' },
                    { name: 'Costa Rica', code: '+506', iso3: 'CRI' },
                    { name: 'Cote d\'Ivoire'', code: '+225', iso3: 'CIV' },
                            { name: 'Croatia', code: '+385', iso3: 'HRV' },
                    { name: 'Cuba', code: '+53', iso3: 'CUB' },
                    { name: 'Cyprus', code: '+357', iso3: 'CYP' },
                    { name: 'Czech Republic', code: '+420', iso3: 'CZE' } ],
            D:
                [ { name: 'Denmark', code: '+45', iso3: 'DNK' },
                    { name: 'Djibouti', code: '+253', iso3: 'DJI' },
                    { name: 'Dominica', code: '+1767', iso3: 'DMA' },
                    { name: 'Dominican Republic', code: '+1849', iso3: 'DOM' } ],
            E:
                [ { name: 'Ecuador', code: '+593', iso3: 'ECU' },
                    { name: 'Egypt', code: '+20', iso3: 'EGY' },
                    { name: 'El Salvador', code: '+503', iso3: 'SLV' },
                    { name: 'Equatorial Guinea', code: '+240', iso3: 'GNQ' },
                    { name: 'Eritrea', code: '+291', iso3: 'ERI' },
                    { name: 'Estonia', code: '+372', iso3: 'EST' },
                    { name: 'Ethiopia', code: '+251', iso3: 'ETH' } ],
            F:
                [ { name: 'Falkland Islands (Malvinas)', code: '+500', iso3: 'FLK' },
                    { name: 'Faroe Islands', code: '+298', iso3: 'FRO' },
                    { name: 'Fiji', code: '+679', iso3: 'FJI' },
                    { name: 'Finland', code: '+358', iso3: 'FIN' },
                    { name: 'France', code: '+33', iso3: 'FRA' },
                    { name: 'French Guiana', code: '+594', iso3: 'GUF' },
                    { name: 'French Polynesia', code: '+689', iso3: 'PYF' } ],
            G:
                [ { name: 'Gabon', code: '+241', iso3: 'GAB' },
                    { name: 'Gambia', code: '+220', iso3: 'GMB' },
                    { name: 'Georgia', code: '+995', iso3: 'GEO' },
                    { name: 'Germany', code: '+49', iso3: 'DEU' },
                    { name: 'Ghana', code: '+233', iso3: 'GHA' },
                    { name: 'Gibraltar', code: '+350', iso3: 'GIB' },
                    { name: 'Greece', code: '+30', iso3: 'GRC' },
                    { name: 'Greenland', code: '+299', iso3: 'GRL' },
                    { name: 'Grenada', code: '+1473', iso3: 'GRD' },
                    { name: 'Guadeloupe', code: '+590', iso3: 'GLP' },
                    { name: 'Guam', code: '+1671', iso3: 'GUM' },
                    { name: 'Guatemala', code: '+502', iso3: 'GTM' },
                    { name: 'Guernsey', code: '+44', iso3: 'GGY' },
                    { name: 'Guinea', code: '+224', iso3: 'GIN' },
                    { name: 'Guinea-Bissau', code: '+245', iso3: 'GNB' },
                    { name: 'Guyana', code: '+595', iso3: 'GUY' } ],
            H:
                [ { name: 'Haiti', code: '+509', iso3: 'HTI' },
                    { name: 'Holy See (Vatican City State)', code: '+379', iso3: 'VAT' },
                    { name: 'Honduras', code: '+504', iso3: 'HND' },
                    { name: 'Hong Kong', code: '+852', iso3: 'HKG' },
                    { name: 'Hungary', code: '+36', iso3: 'HUN' } ],
            I:
                [ { name: 'Iceland', code: '+354', iso3: 'ISL' },
                    { name: 'India', code: '+91', iso3: 'IND' },
                    { name: 'Indonesia', code: '+62', iso3: 'IDN' },
                    { name: 'Iran, Islamic Republic of Persian Gulf', code: '+98', iso3: 'IRN' },
                    { name: 'Iraq', code: '+964', iso3: 'IRQ' },
                    { name: 'Ireland', code: '+353', iso3: 'IRL' },
                    { name: 'Isle of Man', code: '+44', iso3: 'IMN' },
                    { name: 'Israel', code: '+972', iso3: 'ISR' },
                    { name: 'Italy', code: '+39', iso3: 'ITA' } ],
            J:
                [ { name: 'Jamaica', code: '+1876', iso3: 'JAM' },
                    { name: 'Japan', code: '+81', iso3: 'JPN' },
                    { name: 'Jersey', code: '+44', iso3: 'JEY' },
                    { name: 'Jordan', code: '+962', iso3: 'JOR' } ],
            K:
                [ { name: 'Kazakhstan', code: '+77', iso3: 'KAZ' },
                    { name: 'Kenya', code: '+254', iso3: 'KEN' },
                    { name: 'Kiribati', code: '+686', iso3: 'KIR' },
                    { name: 'Korea, Democratic People's Republic of', code: '+850', iso3: 'PRK' },
                            { name: 'Korea, Republic of South Korea', code: '+82', iso3: 'KOR' },
                    { name: 'Kuwait', code: '+965', iso3: 'KWT' },
                    { name: 'Kyrgyzstan', code: '+996', iso3: 'KGZ' } ],
            L:
                [ { name: 'Laos', code: '+856', iso3: 'LAO' },
                    { name: 'Latvia', code: '+371', iso3: 'LVA' },
                    { name: 'Lebanon', code: '+961', iso3: 'LBN' },
                    { name: 'Lesotho', code: '+266', iso3: 'LSO' },
                    { name: 'Liberia', code: '+231', iso3: 'LBR' },
                    { name: 'Libyan Arab Jamahiriya', code: '+218', iso3: 'LBY' },
                    { name: 'Liechtenstein', code: '+423', iso3: 'LIE' },
                    { name: 'Lithuania', code: '+370', iso3: 'LTU' },
                    { name: 'Luxembourg', code: '+352', iso3: 'LUX' } ],
            M:
                [ { name: 'Macao', code: '+853', iso3: 'MAC' },
                    { name: 'Macedonia', code: '+389', iso3: 'MKD' },
                    { name: 'Madagascar', code: '+261', iso3: 'MDG' },
                    { name: 'Malawi', code: '+265', iso3: 'NWI' },
                    { name: 'Malaysia', code: '+60', iso3: 'MYS' },
                    { name: 'Maldives', code: '+960', iso3: 'MDV' },
                    { name: 'Mali', code: '+223', iso3: 'MLI' },
                    { name: 'Malta', code: '+356', iso3: 'MLT' },
                    { name: 'Marshall Islands', code: '+692', iso3: 'MHL' },
                    { name: 'Martinique', code: '+596', iso3: 'MTQ' },
                    { name: 'Mauritania', code: '+222', iso3: 'MRT' },
                    { name: 'Mauritius', code: '+230', iso3: 'MUS' },
                    { name: 'Mayotte', code: '+262', iso3: 'MYT' },
                    { name: 'Mexico', code: '+52', iso3: 'MEX' },
                    { name: 'Micronesia, Federated States of Micronesia', code: '+691', iso3: 'FSM' },
                    { name: 'Moldova', code: '+373', iso3: 'MDA' },
                    { name: 'Monaco', code: '+377', iso3: 'MAR' },
                    { name: 'Mongolia', code: '+976', iso3: 'MNG' },
                    { name: 'Montenegro', code: '+382', iso3: 'MNE' },
                    { name: 'Montserrat', code: '+1664', iso3: 'MSR' },
                    { name: 'Morocco', code: '+212', iso3: 'MAR' },
                    { name: 'Mozambique', code: '+258', iso3: 'MOZ' },
                    { name: 'Myanmar', code: '+95', iso3: 'MMR' } ],
            N:
                [ { name: 'Namibia', code: '+264', iso3: 'NAM' },
                    { name: 'Nauru', code: '+674', iso3: 'NRU' },
                    { name: 'Nepal', code: '+977', iso3: 'NPL' },
                    { name: 'Netherlands', code: '+31', iso3: 'NLD' },
                    { name: 'Netherlands Antilles', code: '+599', iso3: 'ANT' },
                    { name: 'New Caledonia', code: '+687', iso3: 'NCL' },
                    { name: 'New Zealand', code: '+64', iso3: 'NZL' },
                    { name: 'Nicaragua', code: '+505', iso3: 'NIC' },
                    { name: 'Niger', code: '+227', iso3: 'NER' },
                    { name: 'Nigeria', code: '+234', iso3: 'NGA' },
                    { name: 'Niue', code: '+683', iso3: 'NIU' },
                    { name: 'Norfolk Island', code: '+672', iso3: 'NFK' },
                    { name: 'Northern Mariana Islands', code: '+1670', iso3: 'MNP' },
                    { name: 'Norway', code: '+47', iso3: 'NOR' } ],
            O: [ { name: 'Oman', code: '+968', iso3: 'OMN' } ],
            P:
                [ { name: 'Pakistan', code: '+92', iso3: 'PAK' },
                    { name: 'Palau', code: '+680', iso3: 'PLW' },
                    { name: 'Palestinian Territory, Occupied', code: '+970', iso3: 'PSE' },
                    { name: 'Panama', code: '+507', iso3: 'PAN' },
                    { name: 'Papua New Guinea', code: '+675', iso3: 'PNG' },
                    { name: 'Paraguay', code: '+595', iso3: 'PRY' },
                    { name: 'Peru', code: '+51', iso3: 'PER' },
                    { name: 'Philippines', code: '+63', iso3: 'PHL' },
                    { name: 'Pitcairn', code: '+872', iso3: 'PCN' },
                    { name: 'Poland', code: '+48', iso3: 'POL' },
                    { name: 'Portugal', code: '+351', iso3: 'PRT' },
                    { name: 'Puerto Rico', code: '+1939', iso3: 'PRI' } ],
            Q: [ { name: 'Qatar', code: '+974', iso3: 'QAT' } ],
            R:
                [ { name: 'Romania', code: '+40', iso3: 'ROM' },
                    { name: 'Russia', code: '+7', iso3: 'RUS' },
                    { name: 'Rwanda', code: '+250', iso3: 'RWA' },
                    { name: 'Reunion', code: '+262', iso3: 'REU' } ],
            S:
                [ { name: 'Saint Barthelemy', code: '+590', iso3: 'BLM' },
                    { name: 'Saint Helena, Ascension and Tristan Da Cunha', code: '+290', iso3: 'SHN' },
                    { name: 'Saint Kitts and Nevis', code: '+1869', iso3: 'KNA' },
                    { name: 'Saint Lucia', code: '+1758', iso3: 'LCA' },
                    { name: 'Saint Martin', code: '+590', iso3: 'MAF' },
                    { name: 'Saint Pierre and Miquelon', code: '+508', iso3: 'SPM' },
                    { name: 'Saint Vincent and the Grenadines', code: '+1784', iso3: 'VCT' },
                    { name: 'Samoa', code: '+685', iso3: 'WSM' },
                    { name: 'San Marino', code: '+378', iso3: 'SMR' },
                    { name: 'Sao Tome and Principe', code: '+239', iso3: 'STP' },
                    { name: 'Saudi Arabia', code: '+966', iso3: 'SAU' },
                    { name: 'Senegal', code: '+221', iso3: 'SEN' },
                    { name: 'Serbia', code: '+381', iso3: 'SRB' },
                    { name: 'Seychelles', code: '+248', iso3: 'SYC' },
                    { name: 'Sierra Leone', code: '+232', iso3: 'SLE' },
                    { name: 'Singapore', code: '+65', iso3: 'SGP' },
                    { name: 'Slovakia', code: '+421', iso3: 'SVK' },
                    { name: 'Slovenia', code: '+386', iso3: 'SVN' },
                    { name: 'Solomon Islands', code: '+677', iso3: 'SLB' },
                    { name: 'Somalia', code: '+252', iso3: 'SOM' },
                    { name: 'South Africa', code: '+27', iso3: 'ZAF' },
                    { name: 'South Georgia and the South Sandwich Islands', code: '+500', iso3: 'SGS' },
                    { name: 'South Sudan', code: '+211', iso3: 'SSD' },
                    { name: 'Spain', code: '+34', iso3: 'ESP' },
                    { name: 'Sri Lanka', code: '+94', iso3: 'LKA' },
                    { name: 'Sudan', code: '+249', iso3: 'SDN' },
                    { name: 'Suriname', code: '+597', iso3: 'SUR' },
                    { name: 'Svalbard and Jan Mayen', code: '+47', iso3: 'SJM' },
                    { name: 'Swaziland', code: '+268', iso3: 'SWZ' },
                    { name: 'Sweden', code: '+46', iso3: 'SWE' },
                    { name: 'Switzerland', code: '+41', iso3: 'CHE' },
                    { name: 'Syrian Arab Republic', code: '+963', iso3: 'SYR' } ],
            T:
                [ { name: 'Taiwan', code: '+886', iso3: 'TWN' },
                    { name: 'Tajikistan', code: '+992', iso3: 'TJK' },
                    { name: 'Tanzania, United Republic of Tanzania', code: '+255', iso3: 'TZA' },
                    { name: 'Thailand', code: '+66', iso3: 'THA' },
                    { name: 'Timor-Leste', code: '+670', iso3: 'TLS' },
                    { name: 'Togo', code: '+228', iso3: 'TGO' },
                    { name: 'Tokelau', code: '+690', iso3: 'TKL' },
                    { name: 'Tonga', code: '+676', iso3: 'TON' },
                    { name: 'Trinidad and Tobago', code: '+1868', iso3: 'TTO' },
                    { name: 'Tunisia', code: '+216', iso3: 'TUN' },
                    { name: 'Turkey', code: '+90', iso3: 'TUR' },
                    { name: 'Turkmenistan', code: '+993', iso3: 'TKM' },
                    { name: 'Turks and Caicos Islands', code: '+1649', iso3: 'TCA' },
                    { name: 'Tuvalu', code: '+688', iso3: 'TUV' } ],
            U:
                [ { name: 'Uganda', code: '+256', iso3: 'UGA' },
                    { name: 'Ukraine', code: '+380', iso3: 'UKR' },
                    { name: 'United Arab Emirates', code: '+971', iso3: 'ARE' },
                    { name: 'United Kingdom', code: '+44', iso3: 'GBR' },
                    { name: 'United States', code: '+1', iso3: 'USA' },
                    { name: 'Uruguay', code: '+598', iso3: 'URY' },
                    { name: 'Uzbekistan', code: '+998', iso3: 'UZB' } ],
            V:
                [ { name: 'Vanuatu', code: '+678', iso3: 'VUT' },
                    { name: 'Venezuela, Bolivarian Republic of Venezuela', code: '+58', iso3: 'VEN' },
                    { name: 'Vietnam', code: '+84', iso3: 'VNM' },
                    { name: 'Virgin Islands, British', code: '+1284', iso3: 'VGB' },
                    { name: 'Virgin Islands, U.S.', code: '+1340', iso3: 'VIR' } ],
            W: [ { name: 'Wallis and Futuna', code: '+681', iso3: 'WLF' } ],
            Y: [ { name: 'Yemen', code: '+967', iso3: 'YEM' } ],
            Z:
                [ { name: 'Zambia', code: '+260', iso3: 'ZMB' },
                    { name: 'Zimbabwe', code: '+263', iso3: 'ZWE' } ] }
    return data
};