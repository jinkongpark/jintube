import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";


const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;



// MVC는 패턴 또는 스트럭쳐 같은 것임
// M Model - data
// V View - how does the data look
// C Control - funciton that looks for the data




// import express from "express";
// import morgan from "morgan";
// import helmet from "helmet";
// import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";

// const app = express();

// const PORT = 4000;
// const handleListening = () => console.log(`Listening on: htttp://localhost:${PORT}`);
// const handleHome = (req,res) => res.send('hello from home!');
// const handleProfile = (req,res) => res.send("You are on my profile");


// app.use(cookieParser());
// app.use(bodyParser.json({extended: true}));
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(helmet());
// app.use(morgan("dev"));
// app.get("/", handleHome);
// app.get("/profile",handleProfile)
// app.listen(PORT,handleListening);