using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace SignalR_ChatApp
{
    public class chathub : Hub
    {
        public async Task SendMessage( string user, string message )
        {
            await Clients.All.SendAsync("ReciveMessage", user, message);
        }

    }
}
