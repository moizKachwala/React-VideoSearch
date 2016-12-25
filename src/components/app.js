import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

class App extends Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-4">
                    <BookList />
                </div>
                <div className="col-md-6">
                    <BookDetail />
                </div>
            </div>
        )
    }
}

export default App;