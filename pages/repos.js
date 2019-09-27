import axios from 'axios';

function Repos({list}){
    return (
        <div>
            {
                list && list.length > 0 &&
                list.map(item => <p key={item.id}>{item.owner.login + '/' + item.name}</p>)
            }
        </div>
    )
}

Repos.getInitialProps = async({query: {page = 1}}) => {
    const url = 'https://api.github.com/search/repositories?q=react&page=' + page;
    const res = await axios.get(url);
    console.log(url);
    return {
        list: res.data.items
    }
}

export default Repos