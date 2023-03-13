import {Component} from 'react'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const HistoryItem = props => {
  const {historyDetails, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="list-container">
      <p className="time">{timeAccessed}</p>
      <div className="logo-text-container">
        <img src={logoUrl} className="logo-url" alt="domain logo" />
        <p className="name">{title}</p>
        <p className="dom-url"> {domainUrl} </p>
      </div>
      <button
        type="button"
        onClick={onDelete}
        className="btn"
        data-testId="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="del-img"
        />
      </button>
    </li>
  )
}

// Replace your code here
class App extends Component {
  state = {ourList: initialHistoryList, searchInput: ''}

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistoryItem = id => {
    const {ourList} = this.state
    const resList = ourList.filter(each => each.id !== id)
    this.setState({ourList: resList})
  }

  render() {
    const {ourList, searchInput} = this.state
    const filteredList = ourList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-img"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            className="search-icon"
            alt="search"
          />
          <input
            type="search"
            placeholder="Search history"
            className="search-bar"
            onChange={this.onSearch}
            value={searchInput}
          />
        </div>
        {ourList.length === 0 || filteredList.length === 0 ? (
          <div className="text-container">
            <p className="para">There is no history to show</p>
          </div>
        ) : (
          <div className="card-container">
            <ul className="content-container">
              {filteredList.map(each => (
                <HistoryItem
                  historyDetails={each}
                  key={each.id}
                  deleteHistoryItem={this.deleteHistoryItem}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default App
