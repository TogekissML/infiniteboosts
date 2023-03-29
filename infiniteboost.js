(async () => {
    await $.getScript("https://cdn.jsdelivr.net/gh/parseml/many-deobf@latest/deobf.js");
findplayerbyid=Deobfuscator.function(ml.Misc, "b=e;", true)
boosts=Deobfuscator.object(ig.game, "initBoost", true)
startboost=Deobfuscator.function(ig.game.websocket, "D,a)", true)
eval("ig.game."+boosts+".initBoost="+ig.game[boosts].initBoost.toString().replaceAll("--", "")), eval("ig.game.websocket."+startboost+"="+"function(a,b,c,d,e){a={name:a};b&&(a.tid=b);c&&(a.alt=c);d&&(a.selectedRid=d);this.wssend(this.ws, 'od', {rid: ig.game.player.id, pack:[1, 1, {id: [a,b,c,d,e], x: 0, y: 0}]})}")
getwebsocket=Deobfuscator.function(ig.game.websocket, "c,d)", true)
eval("ig.game.websocket."+getwebsocket+"="+ig.game.websocket[getwebsocket].toString().replaceAll("c,d){", "c,d){if(b.m=='od'){ig.game."+boosts+".start(b.data.pack[2].id[0].name, ml.Misc."+findplayerbyid+"(b.data.rid), b.data.pack[2].id[1], b.data.pack[2].id[c], b.data.pack[2].id[3])};"))
})();
