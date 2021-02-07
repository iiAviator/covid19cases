import fetch from 'isomorphic-unfetch';

export async function fetchCovidData(query) {
    const res = await fetch("https://disease.sh/v3/covid-19/" + query);
    if (res.status == 404) {
        return false;
    }
    const data = await res.json();

    return data;
}

export function convertStateName(query) {
  const stateCodes = {"Alabama":"AL","Alaska":"AK","American Samoa":"AS","Arizona":"AZ","Arkansas":"AR","California":"CA","Colorado":"CO","Connecticut":"CT","Delaware":"DE","District Of Columbia":"DC","Federated States Of Micronesia":"FM","Florida":"FL","Georgia":"GA","Guam":"GU","Hawaii":"HI","Idaho":"ID","Illinois":"IL","Indiana":"IN","Iowa":"IA","Kansas":"KS","Kentucky":"KY","Louisiana":"LA","Maine":"ME","Marshall Islands":"MH","Maryland":"MD","Massachusetts":"MA","Michigan":"MI","Minnesota":"MN","Mississippi":"MS","Missouri":"MO","Montana":"MT","Nebraska":"NE","Nevada":"NV","New Hampshire":"NH","New Jersey":"NJ","New Mexico":"NM","New York":"NY","North Carolina":"NC","North Dakota":"ND","Northern Mariana Islands":"MP","Ohio":"OH","Oklahoma":"OK","Oregon":"OR","Palau":"PW","Pennsylvania":"PA","Puerto Rico":"PR","Rhode Island":"RI","South Carolina":"SC","South Dakota":"SD","Tennessee":"TN","Texas":"TX","Utah":"UT","Vermont":"VT","Virgin Islands":"VI","Virginia":"VA","Washington":"WA","West Virginia":"WV","Wisconsin":"WI","Wyoming":"WY"}
  
  return stateCodes[handleCapitalization(query)];
}

export const handleCapitalization = (query) => {
  let wordList = query.split(" ");
  let finalWord = "";

  wordList.forEach(word => {
      finalWord += word.charAt(0).toUpperCase() + word.substring(1, word.length) + " "
  });
  
  return finalWord.trim();
}