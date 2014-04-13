var brews = [
{ id: 1,
  name: "Lake BeErie", 
  type: "Pilsner", 
  season: "Summer", 
  brewery: "The BREW Kettle", 
  story: "A 'Òsessionable'Ó Pilsner with a large portion of malted wheat for a smooth mouth feel and easy drinkability. Generously hopped late in the kettle with a blend of German hops for a pleasantly hoppy flavor and aroma.",
  apv: 4.8, 
  ibu: 21, 
  hops: "", 
  color: "",
  srm: 2,
  source: "http://www.thebrewkettle.com/beers/lake_beerie/index.php",
  pic: "lake_beerie_sm1.png"},
{ id: 2,
  name: "Dark Helmet Imperial Shwarzbier", 
  type: "Lager", 
  season: "", 
  brewery: "The BREW Kettle", 
  story: "A true TBK original, we kick this German-style black lager up a couple notches. Smooth lager taste with a touch of roast and deceptively easy drinking. May the Schwartz be with you!", 
  apv: 9.0, 
  ibu: 45, 
  hops: "", 
  color: "Black",
  srm: 17,
  source: "http://www.thebrewkettle.com/beers/dark_helmet/index.php",
  pic: "Dark_Helmet_sm1.png"},
{ id: 3,
  name: "Big Woody", 
  type: "Lager", 
  season: "", 
  brewery: "The BREW Kettle", 
  story: "A light and refreshing malty lager brewed in the Munich style and tradition.", 
  apv: 5.0, 
  ibu: 18, 
  hops: "", 
  color: "Light",
  srm: 4,
  source: "http://www.thebrewkettle.com/beers/index.html",
  pic: "amber_ale.jpeg"},
{ id: 4,
  name: "Ruddy Rye Amber Rye Pale Ale", 
  type: "Amber Pale Ale",
  season: "", 
  brewery: "The BREW Kettle", 
  story: "An easy drinking Amber Pale Ale made with 30% rye malt, crystal malt and blend of hops to create a spicy, citrus-like flavor with hints of caramel and a medium bitter finish.", 
  apv: 5.5, 
  ibu: 35, 
  hops: "", 
  color: "",
  srm: 6,
  source: "http://thebrewkettle.com/beers/ruddy_rye/index.php",
  pic: "ruddy_rye_sm.png"},
{ id: 5,
  name: "Commadore Perry", 
  type: "India Pale Ale", 
  season: "Year Round", 
  brewery: "Great Lakes Brewing Company", 
  story: "Named for the naval officer and War of 1812 hero who battled the British enemy on Lake Erie, our Commodore Perry India Pale Ale has a pretty dry sense of humor. He likes to answer your question with another question. He loves trivia but refuses to participate on your pub quiz team. He would watch reality TV just to make fun of it, but he doesn't own a TV. He's definitely a cat person. But underneath this edgy exterior, there's a sweeter side. If you're bold enough to drink him, you'll instantly earn his respect. And when you're dealing with the Commodore, respect means a lot.", 
  apv: 7.5, 
  ibu: 70, 
  hops: "", 
  color: "",
  srm: 6,
  source: "",
  pic: "commadore_perry_ipa.jpeg"},
{ id: 6,
  name: "Conway's Irish Ale", 
  type: "Irish Ale", 
  season: "January", 
  brewery: "Great Lakes Brewing Company", 
  story: "We pay homage to Patrick Conway, grandfather of co-owners Patrick and Daniel, and a Cleveland policeman who directed traffic near the Brewery for nearly 25 years. And to all of the hometown heroes who make our city great, we toast with this sweet, roasty brew that pairs best with a well-deserved hot meal after a hard day's work.", 
  apv: 6.5, 
  ibu: 25, 
  hops: "Northern Brewer", 
  color: "",
  srm: 17,
  source: "http://www.greatlakesbrewing.com/uploads/Beer/Conways%20Beer%20Profile%20Sheet%202013.pdf",
  pic: "conway_irish_ale.jpeg"},
{ id: 7,
  name: "Nosferatu", 
  type: "Imperial Red Ale", 
  season: "September", 
  brewery: "Great Lakes Brewing Company", 
  story: "Forgo the paltry teen vampire zeitgeist and retreat to the cellar with our Nosferatu Imperial Red Ale, named for the silver screen's earliest portrayal of Dracula. But beware: one touch of Nosferatu's crisp hop bite to the tongue could turn you into an eternally hop-thirsty monster, and it's pretty hard to come back from that.", 
  apv: 8.0, 
  ibu: 70, 
  hops: "Simcoe", 
  color: "Red",
  srm: 17,
  source: "http://www.greatlakesbrewing.com/uploads/Beer/WEB%20Profile%20Nosferatu%202012.pdf",
  pic: "nosferatu.jpeg"},
{ id: 8,
  name: "Blackout Stout", 
  type: "Imperial Stout", 
  season: "November", 
  brewery: "Great Lakes Brewing Company", 
  story: "Need someone to help you paint your bedroom? We know a guy. Change your oil? We know a guy. Loan you some bold, bitter hops and toasty black malt? We definitely know a guy. Named for the infamous Blackout of 2003 that left the Northeastern United States in complete darkness, Blackout Stout is a pretty useful friend to have around. Hearty and resourceful, he knows how to make his own fun. Crack open a bottle and you will too.", 
  apv: 9.0, 
  ibu: 50, 
  hops: "Simcoe", 
  color: "Black",
  srm: 40,
  source: "http://www.greatlakesbrewing.com/uploads/Beer/WEB%20Profile%20Blackout%20Stout%202012.pdf",
  pic: "blackout_stout.jpeg"},
{ id: 9,
  name: "Rat Tail Ale", 
  type: "American Amber Ale", 
  season: "Year Round", 
  brewery: "Cellar Rats Brewery", 
  story: "Bitterness and aromatic hops dominate this American Amber ale. Strong full malt backbone to match. When you taste this you know your drinking a beer inspired by the adventurous west coast ales.", 
  apv: 6.0, 
  ibu: 34, 
  hops: "", 
  color: "",
  srm: 13, 
  source: "",
  pic: "red_tail_ale.jpeg"},
{ id: 10,
  name: "Double Pale Ale", 
  type: "Pale Ale", 
  season: "Year Round", 
  brewery: "The Dayton Beer Co", 
  story: "A hybrid ale falling between a typical pale ale and an IPA. Hopped with Amarillo, Citra, Summit and Falconers Flight. This hybrid ale has a complex bitterness and flavors of grapefruit, citra, melon and tropical fruit", 
  apv: 7.2, 
  ibu: 60, 
  hops: "", 
  color: "",
  srm: 3,
  source: "http://thedaytonbeerco.com/",
  pic: "double_pale_ale.jpeg"},
{ id: 11,
  name: "Brew Free or Die",
  type: "IPA",
  season: "Year Round",
  brewery: "21st Amendment",
  story: "BREW FREE! OR DIE IPA is brewed with some serious west coast attitude. This aromatic golden IPA starts with a sucker punch of six different hops to the nose, quickly balanced by a solid malt backbone. Our top selling beer at the pub, this IPA starts big and finishes clean leaving you wanting more.",
  apv: 7,
  ibu: 70,
  hops: "Columbus",
  color: "Deep Gold",
  srm: 6,
  source: " ",
  pic: "brew_free_ipa.jpeg"},
{ id: 12,
  name: "Back in Black",
  type: "Black Lager",
  season: "Year Round",
  brewery: "21st Amendment",
  story: "Inspired by Paul RevereÍs midnight ride, we rebelled against the British style IPA, embraced the more aggressive American version and then recast it in bold, brave, defiant black. Our Black IPA is a Declaration of Independence from the tyranny of the expected. Back in Black is our newest year-round beer available now in six pack cans and on draft. Brewed like an American IPA but with the addition of rich, dark malts, this beer has all the flavor and hop character you expect with a smooth, mellow finish.",
  apv: 6.8,
  ibu: 65,
  hops: "Centennial",
  color: "Midnight Black",
  srm: 6,
  source: " ",
  pic: "backinblack_ipa.png"},
{ id: 13,
  name: "Andy Gator",
  type: "Mailbock/ Helles Bock",
  season: " ",
  brewery: "Abita",
  story: "Abita Andygator¬, a creature of the swamp, is a unique, high-gravity brew made with pale malt, German lager yeast, and German Perle hops. Unlike other high-gravity brews, Andygator¬ is fermented to a dry finish with a slightly sweet flavor and subtle fruit aroma. Reaching an alcohol strength of 8% by volume, it is a Helles Doppelbock. You might find it goes well with fried foods. It pairs well with just about anything made with crawfish. Some like it with a robust sandwich. Andygator¬ is also a good aperitif and easily pairs with Gorgonzola and creamy blue cheeses. Because of the high alcohol content, be cautious „ sip it for the most enjoyment.",
  apv: 8,
  ibu: 25,
  hops: " ",
  color: " ",
  srm: "8",
  source: " ",
  pic: "andygator.jpg"},
{ id: 14,
  name: "Jockamo IPA",
  type: "IPA",
  season: " ",
  brewery: "Abita",
  story: "Abita Jockamo IPA¬ is an American IPA brewed with pale, red, and caramel malts. This copper-colored ale is liberally hopped and dry hopped with Willamette and Columbus hops. The flavor is bold like the ñMardi Gras Indiansî who march through New Orleans in suits of feathers and beads. Jockamo has a flavor that entices and excites the palate. The intense hop character adds more spice to the meal and makes it a perfect choice to team up with many spicy dishes. Cheddar and strong farmer cheeses stand up well to JockamoÍs hoppy character. Jockamo goes well with wild game, grilled meats and Thai or Mexican cuisine.",
  apv: 6.5,
  ibu: 52,
  hops: " ",
  color: " ",
  srm: 16,
  source: " ",
  pic: "jackamo_ipa.jpg"},
{ id: 15,
  name: "Purple Haze",
  type: "Fruit Beer",
  season: "Summer",
  brewery: "Abita",
  story: "Purple Haze¬ is a lager brewed with real raspberries added after filtration. It is brewed with pilsner and wheat malts and Vanguard hops. The berries add a fruity aroma, tartly sweet taste and a subtle purple color and haze...you may see fruit pulp in the beer. This beer is best served with salads or light fruit desserts, such as souffl_s or chiffon cakes. Many people enjoy it with chocolate desserts. Purple Haze¬ pairs well with certain cheeses, such as ripened Brie or any dessert made with mascarpone. ItÍs also great paired with entrees prepared with fruit, especially citrus. Consider enjoying Purple Haze¬ alone at the end of your meal as dessert.",
  apv: 4.2,
  ibu: 13,
  hops: " ",
  color: " ",
  srm: 8,
  source: " ",
  pic: "purple_haze.jpg"},
{ id: 16,
  name: "Winter Solstice",
  type: "Winter",
  season: "Winter",
  brewery: "Anderson Valley",
  story: "Warmth.  Our Winter Solstice Seasonal Ale is a hand-crafted ñwinter warmerî with a deep amber hue and a rich, malty mouthfeel. Hints of toffee, spice, and caramel tickle the senses while the smooth, creamy finish will lift your spirits; a perfect beer to share with friends and family during the cold days and long nights of winter.",
  apv: 6.9,
  ibu: 6,
  hops: "Northern Brewer",
  color: "",
  srm: 8,
  source: " ",
  pic: "winter_solstice.jpg"},
{ id: 17,
  name: "B-Craft Black",
  type: "Imperial Black IPA",
  season: " ",
  brewery: "Arcadia Ales",
  story: "Massive in every way, B-Craft delivers a complex bundle of flavors with citrus-hop aroma. Moving beyond the massive hop aroma, rich roasted malt flavors of coffee and chocolate move forward only to be checked by an impressive hop bitterness. Texture and flavor dance together so seamlessly that you may need to remind yourself that this beer slides down as a session; yet delivers like an assassin.",
  apv: 8.5,
  ibu: 85,
  hops: " ",
  color: "Black",
  srm: 24,
  source: " ", 
  pic: "bcraft_black_ipa.png"},
{ id: 18,
  name: "Cocoa Loco",
  type: "Tripple Chocolate Stout",
  season: " ",
  brewery: "Arcadia Ales",
  story: "This triple chocolate stout is a unique interpretation of the style, combining three different chocolate malts, cacao nibs and 63 percent semi-sweet chocolate, creating a sinfully delicious brew. The addition of blackstrap molasses produces an earthy, caramelized tone in an already complex flavor profile. It's creamy, milkshake-like mouthfeel earns this beer the reputation of being dessert in glass.",
  apv: 7,
  ibu: 39,
  hops: " ",
  color: "Brown",
  srm: 13,
  source: " ",
  pic: "cocoa_loca.png"},
{ id: 19,
  name: "Hopmouth",
  type: "Double IPA",
  season: " ",
  brewery: "Arcadia Ales",
  story: "This remarkably balanced brew has a deep amber hue with a generous white head. Hopmouth showcases a rich, toasty flavor and sweet caramel notes because of the high-quality Maris Otter malt used. The hops are up front in the aroma, reminiscent of citrus and pine, while the resin-like flavors linger well after the last sip.",
  apv: 8.1,
  ibu: 55,
  hops: " ",
  color: " ",
  srm: 13,
  source: " ",
  pic: "hopmouth_ipa.png"},
{ id: 20,
  name: "London Porter",
  type: "Porter",
  season: " ",
  brewery: "Arcadia Ales",
  story: "This 18th Century-style Smoked Porter has subtle accent of peat-like Bamberg smoked malt, which is apparent in both the aroma and flavor. It is brewed with seven varieties of premium European malted barley, resulting in note of bittersweet chocolate and coffee that are counter-balanced by a long-sustaining finish of Goldings hops",
  apv: 7.2,
  ibu: 58,
  hops: " ",
  color: " ",
  srm: 24,
  source: " ",
  pic: "london_porter.png"},
{ id: 21,
  name: "Sculpin IPA",
  type: "IPA",
  season: "Year Round",
  brewery: "Ballast Point",
  story: "A trophy beer thatÍs a testament to our homebrew roots. Our Sculpin IPA is a great example of what got us into brewing in the first place. After years of experimenting, we knew hopping an ale at five separate stages would produce something special. The result ended up being this gold-medal winning IPA, whose inspired use of hops creates hints of apricot, peach, mango and lemon flavors, but still packs a bit of a sting, just like a Sculpin fish.",
  apv: 7,
  ibu: 70,
  hops: " ",
  color: "Gold",
  srm: 6,
  source: " ",
  pic: "sculpin_ipa.png"},
{ id: 22,
  name: "Sea Monster Imp Stout",
  type: "Stout",
  season: "Year Round",
  brewery: "Ballast Point",
  story: "Our Sea Monster Imperial Stout explores the darkest reaches of the traditional oatmeal stout. This bold, rich brew first lures you in with roasted coffee notes, then grabs hold with hints of bittersweet chocolate and currant. Backed with a perfect hop balance, youÍll soon discover this is one monster of mythic proportions.",
  apv: 10,
  ibu: 65,
  hops: " ",
  color: "Black",
  srm: 40,
  source: " ",
  pic: "sea_monster.png"},
{ id: 23,
  name: "Toasted Lager",
  type: "Lager",
  season: "Year Round",
  brewery: "Blue Point Brewing Co.",
  story: "The best thing to come out of a brick oven since pizza. Well, weÍve upgraded from our original direct-fire brick kettle, but our flagship Toasted Lager still has the same toasted flavor it was named for. Copper in color, our most popular and unique brew is made from six different malts, including English Pale, Crystal, Munich, Carapils, Wheat, and Belgian Caravienna. Toasted LagerÍs balanced flavor of malt and hops makes for easy drinking and the special lager yeast we use produces an exceptional, long-lasting smooth finish.",
  apv: 5.5,
  ibu: 28,
  hops: " ",
  color: " ",
  srm: 4,
  source: " ",
  pic: "toastedlager.png"},
{ id: 24,
  name: "Hoptical Illusion", 
  type: "IPA", 
  season: "Year Round",
  brewery: "Blue Point Brewing Co.",
  story: "We wonÍt go as far as saying youÍll see things after partaking in a few, but one or two will leave you craving more. Ancient Egyptians stuffed their pillows with fresh hops, believing the hopÍs aroma brought on intense, vivid dreams. Today, our classic, American-style India Pale Ale (IPA) features a rare hop grown exclusively on a small farm in Oregon. One taste and youÍll understand why we bought the entire crop. Our Hoptical Illusion IPA is brewed with a generous amount of this select hop thatÍs added five different ways for maximum hop flavor. The delicious, resiny, citrus-burst that you taste is the ñEssence of the Hopî which is balanced by a malty backbone yielding an intense, golden ale. Hoptical Illusion tantalizes beer loversÍ taste-buds, while its colorful, psychedelic packaging is candy for the eyes.",
  apv: 6.8, 
  ibu: 66,
  hops: " ",
  color: " ",
  srm: 6,
  source: " ",
  pic: "hoptical.png"},
{ id: 25,
  name: "Blueberry Ale",
  type: "Fruit Beer",
  season: "Year Round",
  brewery: "Blue Point Brewing Co.",
  story: "Who knew that throwing some blueberries into a batch of beer one day would have worked out so well? While thereÍs no Oompa-Loompas involved in its production; thereÍs definitely something special that makes Blueberry Ale one of our top-sellers. First brewed in 1998, this delicious golden ale quickly became a year-round favorite. Our fresh Blueberry Ale offers an unusual twist on brewing that turns out to be a wonderful blend of fresh blueberries matched with a distinctive, thirst quenching ale. We carefully add 732 pounds of fresh, plump and juicy, handpicked, USA Northern Highbush Blueberries to every batch. Even before your first sip of Blueberry Ale, a strong, refreshing sweet fruit aroma emanates from the bottle, kicking your taste-buds into overdrive.",
  apv: 4.6,
  ibu: 14,
  hops: " ",
  color: " ",
  srm: 2,
  source: " ",
  pic: "blueberry.jpeg"},
{ id: 26,
  name: "Mosiac Session IPA",
  type: "Session IPA",
  season: "Year Round",
  brewery: "Blue Point Brewing Co.",
  story: "Our Mosaic Session IPA is a light, straw-colored, West Coast version that showcases serious aroma. It features Mosaic, Simcoe, and Centennial hops that lend strong tropical fruit characteristics to a light body and dry finish. You wonÍt be able to drink just one _ and with less than 5% ABV, you donÍt have to. Mosaic Session IPA is an homage to Blue Point Brewing CompanyÍs storied history, a tale that is preserved on the original Tasting Room bar top that dates to 1997. ItÍs also one of the most personal beers weÍve crafted in a long time. Like the brewery itself, itÍs been a work in progress. Our history is very much a mosaic _ made up of a lot of talented people with a passion for brewing, and we think this latest brew is where our past meets our future.",
  apv: 4.8,
  ibu: 45,
  hops: " ",
  color: " ",
  srm: 6,
  source: " ",
  pic: "mosaic_session.png"},
{ id: 27,
  name: "Avalanche",
  type: "American Amber",
  season: "Year Round", 
  rewery: "Breckenridge",
  story: "That's what makes our Avalanche amber ale such a treat. We blend pale and caramel malts „ and just a kiss of bittering hops „ to create a refreshing-but-flavorful, anytime beer. Aromas of pale grains, a semi-sweet middle and a clean-as-Coloradosnow finish make this our best-selling beer.",
  apv: 4,
  ibu: 19,
  hops: " ",
  color: " ",
  srm: 17,
  source: " ",
  pic: "avalanche_ale.png"},
{ id: 28,
  name: "Ophilia",
  type: "American Pale Wheat Ale",
  season: "April",
  brewery: "Breckenridge",
  story: "Subtle hints of citrus round out the complex aroma of Mosaic hops, for a beer so drinkable, itÍll last through multiple acts.",
  apv: 5,
  ibu: 23,
  hops: " ",
  color: " ",
  srm: 2,
  source: " ",
  pic: "ophelia.png"},
{ id: 29,
  name: "Black Chocolate",
  type: "Russian Imperial Stout",
  season: "March",
  brewery: "Brooklyn",
  story: "This is the famous Brooklyn Black Chocolate Stout, ouræaward-winning rendition of the Imperial Stout style, onceæmade exclusively for Catherine the Great. We use threeæmashes to brew each batch of this beer, achieving a luscious deep dark chocolate flavor through a blend of specially roasted malts. We brew it every year for the winteræseason. It is delicious when newly bottled, but also agesæbeautifully for years.",
  apv: 10,
  ibu: 51,
  hops: " ",
  color: "Black",
  srm: 40,
  source: " ",
  pic: "black_chocolate.png"},
{ id: 30,
  name: "Orange Ave Wit",
  type: "Wit",
  season: "Year Round",
  brewery: "Coronado",
  story: "This So-Cal take on a traditional witbier honors Coronado's main street, which is home to our brewpub and was once lined with orange trees. Bolstered by orange zest, coriander and orange blossom honey, its Belgium by way of Coronado. Expect a refreshing, light-bodied brew rife with citrus zing and a hint of earthy spice.",
  apv: 5.2,
  ibu: 19,
  hops: " ",
  color: " ",
  srm: 4,
  source: " ",
  pic: "orange.png"}
];

breweries = [
  {name:"Indigo Imp", loc:"Cleveland", hist:"The Indigo Imp brews seven barrels at a time. This is a relatively small amount for a production brewery but allows us to make quality a priority. It also allows us to keep a constant eye on the beers we are brewing and be able to add a seasonal or one time special brew on a whim.  Indigo Imp has green initiatives too. Imp reuses water from the brewing process for cleaning when possible. Imp beer bottles are recyclable, so please recycle. All spent grains are used by a local farmer to feed cows. "},
  {name:"Great Lakes Brewing Company", loc:"Ohio City", hist:"On September 6, 1988 when brothers Patrick and Daniel Conway opened Great Lakes Brewing Company® in Cleveland’s historic Ohio City neighborhood, that a new era of Cleveland brewing began. As Ohio’s first craft brewery, Great Lakes Brewing Company attracted curious locals seeking high-quality flavorful brews drawn from the taps of our beautiful Victorian-era bar. Our commitment to sustainable business practices greatly contributed to our early popularity and success."},
  {name:"Platform Brewing", loc:"Ohio City", hist:"A new brewery in Ohio City, the Cleveland neighborhood that has remade itself with a heavy emphasis on hops and malts. Not only do they brew their own beers but owners Justin and Paul will help launch new breweries by coaching new brewmasters to perfect their recipe and marketing"},
  {name:"Fat Head", loc:"Noth Olmstead", hist:"In 2009 Fat Head's teamed up with award winning brewer Matt Cole to create Fat Head's Brewery & Saloon in North Olmsted, Ohio and it crashed the scene like a two-headed monster. Success was virtually instantaneous (it came quickly). Producing over 5000 barrels in its first 3 years of business, Fat Head's beers gained notoriety by winning some of the most acclaimed awards in the brewing industry."},
  {name:"The BREW Kettle", loc:"Strogsville", hist:"At The BREW Kettle you are the Brewer.  We'll provide the recipe, ingredients and assistance while you brew and bottle your favorite style of beer.   The BREW Kettle offers over 70 different recipes to choose from.  Chris McKim, our Brewmaster and winner of 9 National Brew-On-Premise Medals (including 5 GOLD'S!), has created each recipe to be technically accurate as described in the style guide for America's largest beer event, The Great American Beer Festival."},
  {name:"Cellar Rats Brewery", loc:"Madison", hist:"Ratbrew beer styles are created to provide you, our beer-drinking friends, with fresh, fun and interesting choices. We draw on numerous brewing traditions to make our beers, but we always add our own “interpretation” of how the styles can be best matched from our taste to your tastes. Our signature Ratbrew beers are brewed from scratch, using the finest malted barley and aromatic hops. We never filter away the character of our beer that is served at the peak of freshness."},
  {name:"The Dayton Beer Co", loc:"Dayton", hist:"proud to be the first true Microbrewery in Dayton in over 50 years. All of our beer is hand-crafted with no automation in small batches with our own unique recipes. This allows us to create beers tailored with with our own vision and style."}
];