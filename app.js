let starbucks = {
    coffee: {
        black_coffee: 'black coffee, for not to be tiring',
        white_coffee: 'white coffee, for to relax'
    },
    tea: {
        black_tea: 'black tea, relieves nausea, improves intestinal microflora, regulates metabolism and stimulates the production of gastric juice',
        green_tea: 'green tea, It is a strong antioxidant, it contains a lot of tannins that cleanse the body of radioactive radiation.'
    }
};
console.log(starbucks);





let city = ['Bishkek', 'Los Angeles', 'Chicago', 'New York', 'Houston', 'Dallas', 'Philadelphia', 'Seattle'];
for(let i = 0; i < city.length; i++){
    if (city[i].length > 7){
        console.log(city[i]);
    }
}





let day = Number(prompt('day'));
switch (day){
    case 1:
        alert('Monday');
        break
    case 2:
        alert('Tuesday');
        break
    case 3:
        alert('Wednesday');
        break
    case 4:
        alert('Thursday');
        break
    case 5:
        alert('Friday');
        break
    case 6:
        alert('Saturday');
        break
    case 7:
        alert('Sunday');
        break
    default:
        console.error('ERROR');
}