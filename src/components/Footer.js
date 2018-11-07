import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

import axios from 'axios';

class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataList: []
    }

  }

  componentWillMount() {
    axios.get('http://localhost:63131/api/todo').then(res => {
      const dataList = res.data;
      this.setState({ dataList });
      console.log(dataList)
    })
  }

  render() {

    return (
    <div>
      <div className="text-center mt-2">
        <span>Filtrele: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
          Hepsini gör
      </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
          Aktifleri gör
      </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Tamamlanmışları gör
      </FilterLink>
      </div>
      <div className='mt-3'>
        {
          this.state.dataList.map(item =>
            <div className='row'>
              <div className='col-md-12'>
                <div className="alert alert-warning" role="alert">
                  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                  <a className='col-md-4 mr-5' style={{ float: 'left' }}><i style={{ float: 'left' }} className="fas fa-map-pin mr-1 mt-1"></i><a style={{ float: 'left' }}>{item.name}</a></a>
                  <a className='col-md-1' style={{ textAlign: '' }}>{item.completed ? 'Evet' : 'Hayır'}</a>
                  <a className='col-md-5 pl-5' style={{ float: 'right' }}><a style={{ float: 'right' }}>{item.deadline}</a></a>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
    )
  }
}

export default Footer
