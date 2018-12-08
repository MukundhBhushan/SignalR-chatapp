# SignalR chatapp

## Chat app with SignalR websocket

#### creating project Using cli

```sh
   dotnet new webapp
   npm init -y
   npm install @aspnet/signalr
```

#### after @aspnet/signalr package is installed
  - navigate to node_modules/@aspnet/signal/dist/browser
  - copy the signalr.js file
  - navigate to wwwroot/lib
  - create a new folder signalr
  - paste signalr.js file copied before in this folder

#### creating a route for signalr
in startup.cs file<br><br>
in the ConfigureServices class
```sh
services.AddSignalR();
```


####adding route

```sh
app.UseSignalR(routes =>
            {
                routes.MapHub<chathub>("/<endpoint>");
            }); 
```


in the project root dir create a chathub.cs file <br>
this file sends and reciving messages

in the chathub.cs file

```sh
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
```
add the main project namespace
create a class which inherits Hub class
create a asny method for sending and reciving messages

```sh
public asyn Task <method name> (<datatype><args>){}
```

for sending messages ->
```sh
    await Clients.All.SendAsync("<Recived Message>",<args>)
```

