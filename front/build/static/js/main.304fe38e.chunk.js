(this["webpackJsonpmy-movies-app"]=this["webpackJsonpmy-movies-app"]||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var r=a(2),s=a(0),c=a.n(s),n=a(10),i=a.n(n),o=(a(87),a(19)),l=a(12),j=a(143),d=a(147),u=a(148),b=a(149),m=a(68),v=a.n(m),p=a(15),O=a.n(p),h=a(24),x=a(13),g=a(8),f=function(e,t){switch(t.type){case"GET_MOVIES":return Object(g.a)(Object(g.a)({},e),{},{movies:t.payload,loading:!1});default:return e}},y=function(e,t){switch(t.type){case"LOGIN_SUCCESS":return localStorage.setItem("token",t.payload),Object(g.a)(Object(g.a)({},e),{},{token:t.payload,isLoading:!1,errors:[]});case"REGISTER_SUCCESS":return Object(g.a)(Object(g.a)({},e),{},{errors:[]});case"LOADING_USER":return Object(g.a)(Object(g.a)({},e),{},{isLoading:!0});case"USER_LOADED":return Object(g.a)(Object(g.a)({},e),{},{isAuth:!0,isLoading:!1,user:t.payload});case"LOGOUT_USER":return localStorage.removeItem("token"),Object(g.a)(Object(g.a)({},e),{},{isAuth:null,user:null,isLoading:!1,token:null});case"FAILED":return Object(g.a)(Object(g.a)({},e),{},{errors:t.payload});default:return e}},N=a(26),w=function(e,t){switch(t.type){case"GET_FAV_MOVIES":return Object(g.a)(Object(g.a)({},e),{},{movies:t.payload});case"DELETE_FAVORITE":return Object(g.a)(Object(g.a)({},e),{},{movies:e.movies.filter((function(e){return e.movieId!==t.payload}))});case"ADD_FAVORITE":return console.log(t.type),console.log(t.payload),Object(g.a)(Object(g.a)({},e),{},{movies:[].concat(Object(N.a)(e.movies),[t.payload])});default:return e}},S=a(25),E=a.n(S),k={movies:[],loading:!0},C={token:localStorage.getItem("token"),isAuth:null,user:null,isLoading:!1,errors:[]},I={movies:[],isLoading:!1},F=Object(s.createContext)(),_=function(e){var t=e.children,a=Object(s.useReducer)(f,k),c=Object(x.a)(a,2),n=c[0],i=c[1],o=Object(s.useReducer)(y,C),l=Object(x.a)(o,2),j=l[0],d=l[1],u=Object(s.useReducer)(w,I),b=Object(x.a)(u,2),m=b[0],v=b[1],p={headers:{"Content-Type":"application/json"}},g={headers:{}},N="852be6b1a9553fb037b99c564fa85deb",S=function(){var e=Object(h.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d({type:"LOADING_USER"}),e.prev=1,(t=localStorage.token)&&(g.headers["x-auth-token"]=t),console.log(g),e.next=7,E.a.get("/api/user/load",g);case 7:a=e.sent,d({type:"USER_LOADED",payload:a.data}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(h.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("/api/user/register",JSON.stringify(t),p);case 3:d({type:"REGISTER_SUCCESS"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),d({type:"FAILED",payload:e.t0.response.data.errors});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(h.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("/api/user/login",JSON.stringify(t),p);case 3:a=e.sent,d({type:"LOGIN_SUCCESS",payload:a.data.token}),S(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),d({type:"FAILED",payload:e.t0.response.data.errors});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(h.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(N,"&language=en-US&page=1"));case 3:t=e.sent,i({type:"GET_MOVIES",payload:t.data.results}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(h.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(N,"&query=").concat(t));case 3:a=e.sent,i({type:"GET_MOVIES",payload:a.data.results}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(h.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.headers["x-auth-token"]=j.token,e.prev=1,e.next=4,E.a.post("/api/movie/addMovie",JSON.stringify(t),p);case 4:a=e.sent,v({type:"ADD_FAVORITE",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(h.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.headers["x-auth-token"]=j.token,e.prev=1,e.next=4,E.a.delete("/api/movie/removeMovie/".concat(t),p);case 4:v({type:"DELETE_FAVORITE",payload:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(h.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.headers["x-auth-token"]=j.token,e.prev=1,e.next=4,E.a.get("/api/movie/getFavMovies",p);case 4:t=e.sent,v({type:"GET_FAV_MOVIES",payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(F.Provider,{value:{moviesList:n.movies,loading:n.loading,user:j.user,getAllMovies:A,getSearchedMovies:L,registerUser:_,loginUser:D,loadUser:S,logout:function(){d({type:"LOGOUT_USER"})},addToFavorite:T,deleteFromFavorite:R,getFavorites:M,favMovies:m.movies,isAuth:j.isAuth,errors:j.errors},children:t})},D=function(){var e=Object(s.useContext)(F).logout;return Object(r.jsx)(j.a,{className:"navBar",position:"static",style:{background:"transparent"},children:Object(r.jsxs)(d.a,{className:"toolBar",children:[Object(r.jsx)(v.a,{style:{color:"black"}}),Object(r.jsx)(u.a,{variant:"h6",style:{flexGrow:1,color:"black"},children:"Movies"}),Object(r.jsx)(o.b,{to:"/welcome",style:{textDecoration:"none"},children:Object(r.jsx)(b.a,{children:"Home"})}),Object(r.jsx)(o.b,{to:"/movies",style:{textDecoration:"none"},children:Object(r.jsx)(b.a,{children:"movies"})}),Object(r.jsx)(o.b,{to:"/favorites",style:{textDecoration:"none"},children:Object(r.jsx)(b.a,{children:"Favorites"})}),Object(r.jsx)(o.b,{to:"/",style:{textDecoration:"none"},children:Object(r.jsx)(b.a,{onClick:function(){return e()},children:"Logout"})})]})})},A=function(){return Object(r.jsx)("div",{className:"welcomeSection",children:Object(r.jsxs)("div",{className:"hero",children:[Object(r.jsx)("div",{className:"heroTitle",children:Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:["All Your Favorite Movies in ",Object(r.jsx)("span",{children:"One"})," Site"]})})}),Object(r.jsx)("div",{className:"heroImage",children:Object(r.jsx)("img",{src:"images/welcome.svg",alt:"hero"})})]})})},L=a(150),T=function(e){var t=e.movie;return Object(r.jsx)(L.a,{item:!0,xs:12,md:3,children:Object(r.jsx)("div",{className:"imageWraper",children:Object(r.jsx)(o.b,{to:"/movies/".concat(t.id),children:Object(r.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(t.poster_path),alt:"poster"})})})})},R=a(153),M=function(){var e=Object(s.useState)(""),t=Object(x.a)(e,2),a=t[0],c=t[1],n=Object(s.useContext)(F).getSearchedMovies;return Object(r.jsx)("div",{children:Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(a),c("")},children:Object(r.jsx)(R.a,{placeholder:"Eyal ha gever",className:"searchInput",variant:"outlined",size:"small",color:"primary",value:a,onChange:function(e){c(e.target.value)}})})})},U=function(){var e=Object(s.useContext)(F),t=e.getAllMovies,a=e.moviesList,c=e.loading;return Object(s.useEffect)((function(){t()}),[]),Object(r.jsxs)("div",{className:"moviesSection",children:[Object(r.jsx)("h1",{children:"Explore Movies World"}),Object(r.jsx)(M,{}),Object(r.jsx)(L.a,{container:!0,className:"moviesGrid",children:c?Object(r.jsx)("h1",{children:"loading..."}):a.map((function(e){return Object(r.jsx)(T,{movie:e},e.id)}))})]})},G=a(69),W=a.n(G),V=a(70),z=a.n(V),B=a(71),P=a.n(B),J=a(72),H=a.n(J),Y=a(73),q=a.n(Y),K=function(e){var t=e.match.params.id,a=Object(s.useState)({}),c=Object(x.a)(a,2),n=c[0],i=c[1],o=Object(s.useState)(!1),l=Object(x.a)(o,2),j=l[0],d=l[1],u=Object(s.useState)(!1),m=Object(x.a)(u,2),v=m[0],p=m[1],g=Object(s.useContext)(F),f=g.addToFavorite,y=g.favMovies,N=g.deleteFromFavoite;Object(s.useEffect)((function(){(function(){var e=Object(h.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("852be6b1a9553fb037b99c564fa85deb"));case 2:a=e.sent,i(a.data),d(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),y.forEach((function(e){e.movieId.toString()===t&&p(!0)}))}),[]);return Object(r.jsxs)("div",{className:"movieDescSection",children:[Object(r.jsx)("div",{className:"movieDescImage",children:Object(r.jsx)("div",{className:"imageWrapper",children:Object(r.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(n.backdrop_path),alt:"desc"})})}),Object(r.jsxs)("div",{className:"movieDescContent",children:[Object(r.jsxs)("div",{className:"titleDesc",children:[Object(r.jsx)("h2",{children:n.title}),Object(r.jsxs)("p",{children:["Genres:"," ",j&&n.genres.map((function(e){return e.name+", "}))]}),Object(r.jsx)("p",{children:n.overview})]}),Object(r.jsxs)("div",{className:"detailsDesc",children:[Object(r.jsxs)("div",{className:"vote card",children:[Object(r.jsx)("h3",{children:"Vote Rate"}),Object(r.jsx)(W.a,{}),Object(r.jsx)("p",{children:n.vote_average})]}),Object(r.jsxs)("div",{className:"releaseDate card",children:[Object(r.jsx)("h3",{children:"Release Date"}),Object(r.jsx)(z.a,{}),Object(r.jsx)("p",{children:n.release_date})]}),Object(r.jsxs)("div",{className:"runTime card",children:[Object(r.jsx)("h3",{children:"Run Time"}),Object(r.jsx)(P.a,{}),Object(r.jsxs)("p",{children:[n.runtime," MIN"]})]})]}),Object(r.jsxs)("div",{className:"siteDesc",children:[Object(r.jsx)("div",{className:"imdbWrapper",children:Object(r.jsx)("a",{href:"https://www.imdb.com/title/".concat(n.imdb_id),target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{src:"/images/imdb.png",alt:"imdb"})})}),n.homepage&&Object(r.jsx)("div",{className:"siteWrapper",children:Object(r.jsx)("a",{href:n.homepage,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{src:"/images/webSiteLogo.png",alt:"www"})})})]}),Object(r.jsx)("div",{className:"favBtnWrapper",children:v?Object(r.jsx)(b.a,{onClick:function(){N(t),p(!1)},className:"removeFavoriteBtn",startIcon:Object(r.jsx)(q.a,{}),variant:"outlined",color:"secondary",children:"Remove From Favorite"}):Object(r.jsx)(b.a,{onClick:function(){var e={movieId:t,title:n.title,poster:"https://image.tmdb.org/t/p/w300".concat(n.poster_path)};f(e),p(!0)},className:"favoriteBtn",startIcon:Object(r.jsx)(H.a,{}),variant:"outlined",color:"primary",children:"Add To Favorite"})})]})]})},Q=a(17),X=a(151),Z=a(152),$=function(){var e=Object(s.useContext)(F),t=e.loginUser,a=e.errors,c=e.isAuth,n=Object(s.useState)({email:"",password:""}),i=Object(x.a)(n,2),j=i[0],d=i[1],u=j.email,m=j.password,v=function(e){d(Object(g.a)(Object(g.a)({},j),{},Object(Q.a)({},e.target.name,e.target.value)))};return c?Object(r.jsx)(l.a,{to:"/welcome"}):Object(r.jsxs)("div",{className:"loginSection",children:[Object(r.jsxs)("div",{className:"loginContent",children:[Object(r.jsxs)("div",{className:"loginText",children:[Object(r.jsx)("h1",{children:"good to see you again!"}),Object(r.jsx)("p",{children:"sign in to the world of movies"})]}),Object(r.jsx)("div",{className:"loginImage",children:Object(r.jsx)("img",{src:"images/login.svg",alt:"login"})})]}),Object(r.jsx)("div",{className:"loginForm",children:Object(r.jsxs)("div",{className:"formContainer",children:[Object(r.jsx)(X.a,{onChange:v,value:u,name:"email",label:"Email",autoFocus:!0,className:"textField",variant:"outlined",size:"small",fullWidth:!0}),Object(r.jsx)(X.a,{onChange:v,value:m,type:"password",name:"password",label:"Password",className:"textField",variant:"outlined",size:"small",fullWidth:!0}),Object(r.jsx)(o.b,{to:"/register",style:{textDecoration:"none"},children:Object(r.jsx)(b.a,{variant:"text",color:"primary",size:"small",style:{marginBottom:15},children:"Don't have an account? Register here"})}),Object(r.jsx)(b.a,{style:{marginBottom:10},onClick:function(){t({email:u,password:m})},variant:"contained",color:"primary",children:"Login"}),Object(r.jsx)("div",{className:"userErrors",children:a&&a.map((function(e){return Object(r.jsx)(Z.a,{className:"alert",variant:"outlined",severity:"error",children:e.msg})}))})]})})]})},ee=function(){var e=Object(s.useContext)(F),t=e.registerUser,a=e.errors,c=Object(s.useState)({name:"",email:"",password:"",rePassword:""}),n=Object(x.a)(c,2),i=n[0],l=n[1],j=i.name,d=i.email,u=i.password,m=i.rePassword,v=function(e){l(Object(g.a)(Object(g.a)({},i),{},Object(Q.a)({},e.target.name,e.target.value)))};return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"registerSection",children:[Object(r.jsx)("div",{className:"registerForm",children:Object(r.jsxs)("div",{className:"formContainer",children:[Object(r.jsx)(X.a,{value:j,name:"name",label:"Name",autoFocus:!0,className:"textField",variant:"outlined",size:"small",fullWidth:!0,onChange:v}),Object(r.jsx)(X.a,{value:d,name:"email",label:"Email",className:"textField",variant:"outlined",size:"small",fullWidth:!0,onChange:v}),Object(r.jsx)(X.a,{value:u,type:"password",name:"password",label:"Password",className:"textField",variant:"outlined",size:"small",fullWidth:!0,onChange:v}),Object(r.jsx)(X.a,{value:m,type:"password",name:"rePassword",label:"Re-Password",className:"textField",variant:"outlined",size:"small",fullWidth:!0,onChange:v}),Object(r.jsx)(o.b,{to:"/",style:{textDecoration:"none"},children:Object(r.jsx)(b.a,{variant:"text",color:"primary",size:"small",style:{marginBottom:15},children:"Already have an account? Go to Login"})}),Object(r.jsx)(b.a,{onClick:function(e){u!==m?alert("Passwords Not matches"):t({name:j,email:d,password:u})},variant:"contained",color:"secondary",children:"Register"}),Object(r.jsx)("div",{className:"userErrors",children:a&&a.map((function(e){return Object(r.jsx)(Z.a,{className:"alert",variant:"outlined",severity:"error",children:e.msg})}))})]})}),Object(r.jsxs)("div",{className:"registerContent",children:[Object(r.jsxs)("div",{className:"registerText",children:[Object(r.jsx)("h1",{children:"Join our community!"}),Object(r.jsx)("p",{children:"we all love movies"})]}),Object(r.jsx)("div",{className:"registerImage",children:Object(r.jsx)("img",{src:"images/register.svg",alt:"register"})})]})]})})},te=function(){var e=Object(s.useContext)(F),t=e.getFavorites,a=e.user,c=e.favMovies;return Object(s.useEffect)((function(){t()}),[]),Object(r.jsxs)("div",{className:"favSection",children:[Object(r.jsxs)("h1",{children:["Hello ",a&&a.name]}),Object(r.jsx)("div",{className:"avatarWrapper",children:Object(r.jsx)("img",{src:a&&a.avatar,alt:"avatar"})}),Object(r.jsx)("h3",{style:{marginTop:50},children:"Your favorite movies"}),Object(r.jsx)(L.a,{container:!0,children:c&&c.map((function(e){return Object(r.jsx)(L.a,{item:!0,xs:12,md:3,children:Object(r.jsx)(o.b,{to:"/movies/".concat(e.movieId),children:Object(r.jsxs)("div",{className:"favImageWrapper",children:[Object(r.jsx)("h4",{children:e.title}),Object(r.jsx)("img",{src:c&&e.poster,alt:"fav"})]})})})}))})]})};var ae=function(){var e=Object(s.useContext)(F),t=e.isAuth,a=e.loadUser;return Object(s.useEffect)((function(){a()}),[]),Object(r.jsx)(o.a,{children:Object(r.jsxs)("div",{className:"App",children:[t&&Object(r.jsx)(D,{}),Object(r.jsx)(l.b,{exact:!0,path:"/",component:$}),Object(r.jsx)(l.b,{path:"/register",component:ee}),Object(r.jsx)(l.b,{path:"/welcome",component:A}),Object(r.jsx)(l.b,{exact:!0,path:"/movies",component:U}),Object(r.jsx)(l.b,{path:"/movies/:id",component:K}),Object(r.jsx)(l.b,{path:"/favorites",component:te})]})})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(_,{children:Object(r.jsx)(ae,{})})}),document.getElementById("root"))},87:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.304fe38e.chunk.js.map