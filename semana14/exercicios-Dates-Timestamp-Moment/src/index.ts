import * as moment from 'moment'
moment.locale("pt-br")

type event = {
  name: string,
  description: string,
  startAt: moment.Moment,
  finishAt: moment.Moment
}

const allEvents: event[] = [
  {
    name: "Reunião",
    description: "Reunião muito importante",
    startAt: moment("25/08/2020 15:00", "DD/MM/YYYY HH:mm"),
    finishAt: moment("25/08/2020 17:00", "DD/MM/YYYY HH:mm")
  },
  {
    name: "Reuniãozinha",
    description: "Reunião não importante",
    startAt: moment("30/08/2020 17:00", "DD/MM/YYYY HH:mm"),
    finishAt: moment("30/08/2020 17:30", "DD/MM/YYYY HH:mm")
  }
]

// Para o horário ser de Londres acrescentaria .utcOffset("+0400").format("DD[th] MMMM YYYY")
const printAllEvents = (events: event[]): void => {
  events.forEach((item: event) => {
    const duration = item.finishAt.diff(item.startAt, "minutes");

    const today = moment();
    const daysUntilEvent = item.startAt.diff(today, "days");

    console.log(`
      Nome: ${item.name}
      Horário de início: ${item.startAt.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
      Horário de fim: ${item.finishAt.format("DD [de] MMMM [de] YYYY, HH:mm")}
      Descrição: ${item.description}
      Duração: ${duration}
      Dias até o evento: ${daysUntilEvent}
    `)
  })
}

const createEvent = (
    name: string = process.argv[2],
    description: string = process.argv[3],
    startAt: moment.Moment = moment(process.argv[4], "DD/MM/YYYY HH:mm"),
    finishAt: moment.Moment = moment(process.argv[5], "DD/MM/YYYY HH:mm")
): void => { 
    const diffStartAtAndToday = startAt.diff(moment(), "seconds");
    const diffFinishAtAndToday = finishAt.diff(moment(), "seconds");
  
    if (diffStartAtAndToday < 0 && diffFinishAtAndToday < 0) {
      console.log("Data anterior a data atual");
      return;
    }
  
    allEvents.push({
      name,
      description,
      startAt,
      finishAt,
    });

    if (!name || !description || !startAt || !finishAt) {
        console.log("Faltou parâmetro(s)");
        return;
    } else {
        printAllEvents(allEvents) 
    }
};

//createEvent()   
