const {events} = require('./data') 

export default (req, res) => {
  res.status(200).json(events)
}
