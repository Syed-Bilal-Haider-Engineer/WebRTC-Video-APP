import { Socket } from "socket.io";

const io = new Socket(8000,{
    cors:true
})

io.on("connect",(socket)=>{
 console.log("connect with socket");
})