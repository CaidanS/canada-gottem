# Canada Gottem

Quick little website to sell fake Canada Goose patches and stickers designed by Venice Ohleyer. Making fun of Canada Goose wearers because I think its funny. Front end is pure HTML/CSS/JS. Backend is a node script via google cloud functions which communicates with stripe's checkout api to handle payment and redirect back to success page. Theoretically possible to do a client only integration, but in order to specify shipping options you need to use the server side checkout redirect for some godforsaken reason. 

![website screenshot](/website_screenshot.png)
