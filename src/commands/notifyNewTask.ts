import { Client, TextChannel } from "discord.js";
import { createMessage } from "../DiscordMessaging/formatDiscordMessages";
import { Task } from "../interfaces/Itasks";
import { setTasks, todoistTasks } from "../tasks";
import { getTodoistTasks } from "../todoistAPI";


function GetDifferenceBetweenTaskArrays(tasks: Task[], oldTasks: Task[]): Task[] {
  const results = tasks.filter(
    ({ name: newName, date: newDate, description: newDescription }) => (
      !oldTasks.some(({ name: oldName, date: oldDate, description: oldDescription }) => {
        if ((newName === oldName) && (newDate === oldDate) && (newDescription === oldDescription)) {
          return true;
        }
        else {
          return false;
        }
      })
    ));

  return results;
}

async function CheckIfTasksChanged(oldTasks: Task[]) {
  const tasks = await getTodoistTasks('');
  const differenceBetweeenTaskArrays = GetDifferenceBetweenTaskArrays(tasks, oldTasks);

  if (differenceBetweeenTaskArrays.length > 0) {
    setTasks(tasks);
    return { newTasks: differenceBetweeenTaskArrays, needsUpdate: true };
  }
  else {
    return { newTasks: differenceBetweeenTaskArrays, needsUpdate: false };
  }
}

function TimeInMinutes(timeInMinutes: number) {
  const timeInMilliseconds = timeInMinutes * 60000;
  return timeInMilliseconds;
}

function sendNotificationMessage(channel: TextChannel, tasks: Task[]) {
  const message = createMessage(tasks);

  //const debugNotificationRoleId = "956155701879799839";
  const notificationRoleId = "932750369157685298";
  channel.send(`<@&${notificationRoleId}>\n`);
  channel.send(`\n:bell: ${tasks.length} ** tarefas foram adicionadas ou modificadas: ** \n`);
  channel.send(`\n${message}`);
}

function notifyNewTasks(client: Client<boolean>) {
  const notificationChannelId = "932749818168758352";
  //const debugNotificationChannelId = "956155530349543474";
  const channel = client.channels.cache.get(notificationChannelId) as TextChannel;

  setInterval(async () => {
    const tasksChanged = await CheckIfTasksChanged(todoistTasks);

    if (tasksChanged.needsUpdate) {
      sendNotificationMessage(channel, tasksChanged.newTasks);
    }

  }, TimeInMinutes(15));
}

export { notifyNewTasks }