import React, { Component } from 'react';
import './styles.css';
import SearchBar from './components/search_bar';
import DeviceList from './components/device_list';
import DeviceDetail from './components/device_detail';

const DEVICES_API_URL = 'http://localhost:8888/devices';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            devices: [],
            total_active: 0,
            total_deactive: 0,
            selectedDevice: null
        };
        this.deviceSearch();
    }

    deviceSearch = (term) => {
        let self = this;
        let total_active = 0;
        let total_deactive = 0;

        fetch(DEVICES_API_URL)
            .then(res => res.json())
            .then((result) => {
                let result_set = [];

                result.data.forEach(function (item, index) {
                    if(item.name === term){
                        result_set.push(item)
                    }
                    if(item.active === true){
                        total_active = total_active + 1;
                    } else{
                        total_deactive = total_deactive + 1;
                    }

                });

                if(term === undefined || term === ""){
                    result_set = result.data;
                }

                self.setState({
                    devices: result_set,
                    total_active: total_active,
                    total_deactive: total_deactive,
                    selectedDevice: null
                });
            })
    };

    deviceSelect = (selectedDevice) => {
        this.setState({
            selectedDevice: selectedDevice
        });
        window.scrollTo(0, 0)
    };

    deviceStatusChange = (selectedDevice) => {
        let self = this;
        let total_active = this.state.total_active;
        let total_deactive = this.state.total_deactive;

        let status = !selectedDevice.active;
        fetch(DEVICES_API_URL+'/'+selectedDevice.name+'?active='+!selectedDevice.active, {
            method: 'PATCH'
        })
            .then((response) => {
                if(response.status === 200){
                    if(status === true){
                        self.setState({
                            total_active: total_active + 1,
                            total_deactive: total_deactive - 1,
                        });
                    } else {
                        self.setState({
                            total_active: total_active - 1,
                            total_deactive: total_deactive + 1,
                        });
                    }
                    alert(response.statusText)
                }
                alert(response.statusText)
            })
    };

    render() {
        return (
            <div>
                <div className='instructions'>
                    <h1>Relayr Device Dashboard</h1>
                    <p>
                        <strong><span style={{float:'left'}}>Total Active : {this.state.total_active}</span></strong>
                        <strong><span style={{float:'right'}}>Total Deactive : {this.state.total_deactive}</span></strong>
                    </p>
                </div>

                <SearchBar onSearchTermChange={searchTerm => this.deviceSearch(searchTerm)} />

                <div className="box row">
                    <div className={this.state.selectedDevice ? "col-lg-3 col-md-3 col-sm-3 col-xs-12" : ""}> </div>
                    <div className={this.state.selectedDevice ? "col-lg-6 col-md-6 col-sm-6 col-xs-12" : "col-lg-6 col-md-6 col-sm-6 col-xs-12"}>
                        <DeviceDetail device={this.state.selectedDevice} />
                    </div>
                </div>

                <div className="container">
                    <DeviceList
                        onDeviceSelect={selectedDevice => this.deviceSelect(selectedDevice)}
                        onDeviceStatusChange={selectedDevice => this.deviceStatusChange(selectedDevice)}
                        devices={this.state.devices} />
                </div>
            </div>
        );
    }
}

export default App;
