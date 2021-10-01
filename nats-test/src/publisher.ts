import nats from 'node-nats-streaming';


async function start(){
const stan = await nats.connect('ticketing', 'abc', {
  url:"http://dev.treflo.com:4222",
});

stan.on('connect', () => {
  console.log('Publisher connected to NATS');

  const data = JSON.stringify({
    id: '123',
    title: 'concert',
    price: 20,
  });

  stan.publish('ticket:created', data, () => {
    console.log('Event published');
  });
});
}
start();




