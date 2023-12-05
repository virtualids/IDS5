const axios = require('axios');
const fs = require('fs'); 
 
 const config = require('./airportsConfig.json');
const airports = config.airports;
  
const fetchMetarData = async () => { 
    const metarData = {}; 
    
    for (const airport of airports) { 
        try {
             const response = await axios.get(`http://metar.vatsim.net/metar/${airport}`);
              metarData[airport] = response.data; 
            } catch (error: any) { 
                console.error(`Error fetching METAR for ${airport}: ${error.message}`);
             } 
            } 
            
            return metarData; 
        }; 
        
        fetchMetarData().then(data => {
             fs.writeFileSync('metarData.json', JSON.stringify(data, null, 2)); 
             console.log('METAR data saved to metarData.json'); 
            });