import DroidProducer from './abstract-factory';

const battleDrone = new DroidProducer().getDrone('battle');
console.log(battleDrone.info());

const pilotDrone = new DroidProducer().getDrone('pilot');
console.log(pilotDrone.info());
