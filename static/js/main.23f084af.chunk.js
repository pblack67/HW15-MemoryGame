(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://i2.wp.com/media.boingboing.net/wp-content/uploads/2017/04/shatner.jpg?w=1280&ssl=1"},{id:2,image:"https://pizzaforgood.files.wordpress.com/2015/02/3f162b8.jpg"},{id:3,image:"https://i.imgflip.com/18jjj9.jpg"},{id:4,image:"https://venturebeat.com/wp-content/uploads/2014/08/dr-mccoy.jpg?w=1263&strip=all"},{id:5,image:"https://regmedia.co.uk/2015/06/05/uhura.jpg?x=442&y=293&crop=1"},{id:6,image:"https://external-preview.redd.it/rVTFkxXifPew20m3h_IeBtKNPRxMnTgSD1HGfbXIKFA.jpg?auto=webp&s=f22c4393ba556a56c607132f24b4ed9fece289cd"},{id:7,image:"https://cdn.vox-cdn.com/thumbor/vKctU66zkUoL9xDwKdGUgQx8k2Y=/0x28:600x428/2120x1413/filters:focal(0x28:600x428):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/46810120/picard-engage.0.0.jpg"},{id:8,image:"https://www.orlandosentinel.com/resizer/7U4AiBDY4SkQ8ZFnih2bC8qVXB4=/fit-in/800x600/top/filters:fill(black)/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/T3U4NKRKGZFM5LI4LHGCHWWMA4.jpg"},{id:9,image:"http://www.treknews.net/wp-content/uploads/2017/06/gates-mcfadden-beverly-crusher-star-trek-tng.jpg"},{id:10,image:"https://vignette.wikia.nocookie.net/malf/images/0/0f/Deanna-Troi.jpg/revision/latest/scale-to-width-down/1000?cb=20100509063307"},{id:11,image:"http://images2.fanpop.com/images/photos/7800000/Reunion-ST-TNG-episode-4x07-worf-7862721-694-530.jpg"},{id:12,image:"https://trendwalkdotnet.files.wordpress.com/2016/02/star-trend-geordi-laforge.jpg"}]},,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),c=a.n(r),o=a(4),s=a(5),l=a(7),m=a(6),d=a(8);a(15);var g=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:"Whoops",src:e.image,onClick:function(){e.clickHandler(e.id)}})))};a(16);var p=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};a(17);var u=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h4",{className:"text-white text-center"},"Score ",e.score),i.a.createElement("h4",{className:"text-white text-center"},e.message))},f=a(1);a(18);var h=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={tiles:f,score:0,message:"Click any tile to start!"},e.clickHandler=function(t){var a=e.state.tiles.find(function(e){return e.id===t});if(a.clicked)e.setState({score:0}),e.setState({message:"Augh! You already clicked that one!!!"}),f.forEach(function(e){return e.clicked=!1});else{a.clicked=!0;var n=e.state.score+1;e.setState({score:n}),e.setState({message:"Whew! You have a good memory"})}var i=function(e){for(var t=e,a=0;a<2*e.length;a++){var n=Math.floor(Math.random()*e.length),i=Math.floor(Math.random()*e.length),r=e[n];e[n]=e[i],e[i]=r}return t}(e.state.tiles);e.setState({tiles:i})},f.forEach(function(e){return e.clicked=!1}),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"top"},i.a.createElement("h1",{className:"title"},"Star Trek Memory Game"),i.a.createElement(u,{score:this.state.score,message:this.state.message})),i.a.createElement(p,null,this.state.tiles.map(function(t){return i.a.createElement(g,{image:t.image,key:t.id,id:t.id,clickHandler:e.clickHandler})})))}}]),t}(i.a.Component);a(19);c.a.render(i.a.createElement(h,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.23f084af.chunk.js.map