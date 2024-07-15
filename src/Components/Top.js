import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, Badge } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Sidebar } from './Home';

// All news code

function All() {
  const [allnews, setData] = useState([]);

  async function load() {
    const url = 'https://inshorts.vercel.app/news/top';
    const obj = await (await fetch(url)).json();
    var myobj=obj["data"]["articles"];
    setData(myobj);
  }

  useEffect(() => {
    const interval=setInterval(() => {
      load()
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);

  return (
    <div className='divcontainer'>
      {allnews.map((myd, index) => (
        <Card style={{ width: '20rem' }} key={index}>
          <Card.Header>
            <Badge bg='primary'>{myd.categoryNames}</Badge>
          </Card.Header>
          <Card.Img variant="top" src={myd.imageUrl} />
          <Card.Body>
            <Card.Title>{myd.title}</Card.Title>
            <Card.Text>{myd.content}<a href={myd.shortenedUrl} target='_blank'>read more....</a></Card.Text>
          </Card.Body>
          <Card.Footer><i>Author Name :{myd.authorName}</i></Card.Footer>
        </Card>
      ))}
    </div>
  );
}

// sport news code

function Sport() {
  const [sportnews, setData] = useState([]);

  async function load() {
    const url = 'https://inshortsapi.vercel.app/news?category=sports';
    const obj = await (await fetch(url)).json();
    var myobj=obj["data"];
    setData(myobj);
  }

  useEffect(() => {
    const interval=setInterval(() => {
      load()
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);

  return (
    <div className='divcontainer'>
      <Sidebar/>
      {sportnews.map((myd, index) => (
        <Card style={{ width: '20rem' }} key={index}>
          <Card.Header>
            <Badge bg='primary'>Sport</Badge>
          </Card.Header>
          <Card.Img variant="top" src={myd.imageUrl} />
          <Card.Body>
            <Card.Title>{myd.title}</Card.Title>
            <Card.Text>{myd.content}<a href={myd.readMoreUrl} target='_blank'>read more....</a></Card.Text>
          </Card.Body>
          <Card.Footer><i>Author Name :{myd.author}</i></Card.Footer>
        </Card>
      ))}
    </div>
  );
}

// Top news code

function Top() {
  const [topnews, setData] = useState([]);

  async function load() {
    const url = 'https://inshortsapi.vercel.app/news?category=all';
    const obj = await (await fetch(url)).json();
    var myobj=obj["data"];
    setData(myobj);
  }

  useEffect(() => {
    const interval=setInterval(() => {
      load()
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);

  return (
    <div className='divcontainer'>
      <Sidebar/>
      {topnews.map((myd, index) => (
        <Card style={{ width: '20rem' }} key={index}>
          <Card.Header>
            <Badge bg='primary'>Top News</Badge>
          </Card.Header>
          <Card.Img variant="top" src={myd.imageUrl} />
          <Card.Body>
            <Card.Title>{myd.title}</Card.Title>
            <Card.Text>{myd.content}<a href={myd.readMoreUrl} target='_blank'>read more....</a></Card.Text>
          </Card.Body>
          <Card.Footer><i>Author Name :{myd.author}</i></Card.Footer>
        </Card>
      ))}
    </div>
  );
}

//national news code

function National() {
  const [nationalnews, setData] = useState([]);

  async function load() {
    const url = 'https://inshortsapi.vercel.app/news?category=national';
    const obj = await (await fetch(url)).json();
    var myobj=obj["data"];
    setData(myobj);
  }

  useEffect(() => {
    const interval=setInterval(() => {
      load()
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);

  return (
    <div className='divcontainer'>
      <Sidebar/>
      {nationalnews.map((myd, index) => (
        <Card style={{ width: '20rem' }} key={index}>
          <Card.Header>
            <Badge bg='primary'>National News</Badge>
          </Card.Header>
          <Card.Img variant="top" src={myd.imageUrl} />
          <Card.Body>
            <Card.Title>{myd.title}</Card.Title>
            <Card.Text>{myd.content}<a href={myd.readMoreUrl} target='_blank'>read more....</a></Card.Text>
          </Card.Body>
          <Card.Footer><i>Author Name :{myd.author}</i></Card.Footer>
        </Card>
      ))}
    </div>
  );
}

//business news code

function Business() {
  const [businessnews, setData] = useState([]);

  async function load() {
    const url = 'https://inshortsapi.vercel.app/news?category=business';
    const obj = await (await fetch(url)).json();
    var myobj=obj["data"];
    setData(myobj);
  }

  useEffect(() => {
    const interval=setInterval(() => {
      load()
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);

  return (
    <div className='divcontainer'>
      <Sidebar/>
      {businessnews.map((myd, index) => (
        <Card style={{ width: '20rem' }} key={index}>
          <Card.Header>
            <Badge bg='primary'>Business News</Badge>
          </Card.Header>
          <Card.Img variant="top" src={myd.imageUrl} />
          <Card.Body>
            <Card.Title>{myd.title}</Card.Title>
            <Card.Text>{myd.content}<a href={myd.readMoreUrl} target='_blank'>read more....</a></Card.Text>
          </Card.Body>
          <Card.Footer><i>Author Name :{myd.author}</i></Card.Footer>
        </Card>
      ))}
    </div>
  );
}

//world news code

function World() {
  const [news, setData] = useState([]);

  async function load() {
    const url = 'https://inshortsapi.vercel.app/news?category=world';
    const obj = await (await fetch(url)).json();
    var myobj=obj["data"];
    setData(myobj);
  }

  useEffect(() => {
    const interval=setInterval(() => {
      load()
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);

  return (
    <div className='divcontainer'>
      <Sidebar/>
      {news.map((myd, index) => (
        <Card style={{ width: '20rem' }} key={index}>
          <Card.Header>
            <Badge bg='primary'>World News</Badge>
          </Card.Header>
          <Card.Img variant="top" src={myd.imageUrl} />
          <Card.Body>
            <Card.Title>{myd.title}</Card.Title>
            <Card.Text>{myd.content}<a href={myd.readMoreUrl} target='_blank'>read more....</a></Card.Text>
          </Card.Body>
          <Card.Footer><i>Author Name :{myd.author}</i></Card.Footer>
        </Card>
      ))}
    </div>
  );
}

//politics news code

function Politics() {
  const [news, setData] = useState([]);

  async function load() {
    const url = 'https://inshortsapi.vercel.app/news?category=politics';
    const obj = await (await fetch(url)).json();
    var myobj=obj["data"];
    setData(myobj);
  }

  useEffect(() => {
    const interval=setInterval(() => {
      load()
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);

  return (
    <div className='divcontainer'>
      <Sidebar/>
      {news.map((myd, index) => (
        <Card style={{ width: '20rem' }} key={index}>
          <Card.Header>
            <Badge bg='primary'>Politics News</Badge>
          </Card.Header>
          <Card.Img variant="top" src={myd.imageUrl} />
          <Card.Body>
            <Card.Title>{myd.title}</Card.Title>
            <Card.Text>{myd.content}<a href={myd.readMoreUrl} target='_blank'>read more....</a></Card.Text>
          </Card.Body>
          <Card.Footer><i>Author Name :{myd.author}</i></Card.Footer>
        </Card>
      ))}
    </div>
  );
}

//technology news code

function Technology() {
  const [news, setData] = useState([]);

  async function load() {
    const url = 'https://inshortsapi.vercel.app/news?category=technology';
    const obj = await (await fetch(url)).json();
    var myobj=obj["data"];
    setData(myobj);
  }

  useEffect(() => {
    const interval=setInterval(() => {
      load()
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);

  return (
    <div className='divcontainer'>
      <Sidebar/>
      {news.map((myd, index) => (
        <Card style={{ width: '20rem' }} key={index}>
          <Card.Header>
            <Badge bg='primary'>Tech News</Badge>
          </Card.Header>
          <Card.Img variant="top" src={myd.imageUrl} />
          <Card.Body>
            <Card.Title>{myd.title}</Card.Title>
            <Card.Text>{myd.content}<a href={myd.readMoreUrl} target='_blank'>read more....</a></Card.Text>
          </Card.Body>
          <Card.Footer><i>Author Name :{myd.author}</i></Card.Footer>
        </Card>
      ))}
    </div>
  );
}

//startup news code

function Startup() {
  const [news, setData] = useState([]);

  async function load() {
    const url = 'https://inshortsapi.vercel.app/news?category=startup';
    const obj = await (await fetch(url)).json();
    var myobj=obj["data"];
    setData(myobj);
  }

  useEffect(() => {
    const interval=setInterval(() => {
      load()
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);

  return (
    <div className='divcontainer'>
      <Sidebar/>
      {news.map((myd, index) => (
        <Card style={{ width: '20rem' }} key={index}>
          <Card.Header>
            <Badge bg='primary'>Startup News</Badge>
          </Card.Header>
          <Card.Img variant="top" src={myd.imageUrl} />
          <Card.Body>
            <Card.Title>{myd.title}</Card.Title>
            <Card.Text>{myd.content}<a href={myd.readMoreUrl} target='_blank'>read more....</a></Card.Text>
          </Card.Body>
          <Card.Footer><i>Author Name :{myd.author}</i></Card.Footer>
        </Card>
      ))}
    </div>
  );
}

//entertainment news code

function Entertainment() {
  const [news, setData] = useState([]);

  async function load() {
    const url = 'https://inshortsapi.vercel.app/news?category=entertainment';
    const obj = await (await fetch(url)).json();
    var myobj=obj["data"];
    setData(myobj);
  }

  useEffect(() => {
    const interval=setInterval(() => {
      load()
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);

  return (
    <div className='divcontainer'>
      <Sidebar/>
      {news.map((myd, index) => (
        <Card style={{ width: '20rem' }} key={index}>
          <Card.Header>
            <Badge bg='primary'>Entertainment News</Badge>
          </Card.Header>
          <Card.Img variant="top" src={myd.imageUrl} />
          <Card.Body>
            <Card.Title>{myd.title}</Card.Title>
            <Card.Text>{myd.content}<a href={myd.readMoreUrl} target='_blank'>read more....</a></Card.Text>
          </Card.Body>
          <Card.Footer><i>Author Name :{myd.author}</i></Card.Footer>
        </Card>
      ))}
    </div>
  );
}

//miscellaneous news code

function Miscellaneous() {
  const [news, setData] = useState([]);

  async function load() {
    const url = 'https://inshortsapi.vercel.app/news?category=miscellaneous';
    const obj = await (await fetch(url)).json();
    var myobj=obj["data"];
    setData(myobj);
  }

  useEffect(() => {
    const interval=setInterval(() => {
      load()
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);

  return (
    <div className='divcontainer'>
      <Sidebar/>
      {news.map((myd, index) => (
        <Card style={{ width: '20rem' }} key={index}>
          <Card.Header>
            <Badge bg='primary'>Miscellaneous News</Badge>
          </Card.Header>
          <Card.Img variant="top" src={myd.imageUrl} />
          <Card.Body>
            <Card.Title>{myd.title}</Card.Title>
            <Card.Text>{myd.content}<a href={myd.readMoreUrl} target='_blank'>read more....</a></Card.Text>
          </Card.Body>
          <Card.Footer><i>Author Name :{myd.author}</i></Card.Footer>
        </Card>
      ))}
    </div>
  );
}

export default All;
export {Top,Sport,National,Business,World,Politics,Technology,Startup,Entertainment,Miscellaneous}
