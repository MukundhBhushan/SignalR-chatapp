const connection = new signalR.HubConnectionBuilder()
    .withUrl("/chathub")
    .build();


 
//sending messages
document.getElementById("submitBtn").addEventListener("click", event => {
    const user = document.getElementById("name").value;
    const message = document.getElementById("message").value;


    connection.invoke("SendMessage", user, message).catch(err => {
        console.error(err.toString());
        event.preventDefault();
    });
});


//reciving messages
connection.on(("ReciveMessage"), (user, message) => {
    var mess = `${user}+${message}`;
    const li = document.createElement("li");
    li.textContent = mess;
    document.getElementById("messagelist").appendChild(li);

});

connection.start().catch(err => {
    console.error(err);

});