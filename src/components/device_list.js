import React from 'react';
import DeviceItem from './device_item';

const DeviceList = (props) => {

    if(props.devices.length < 1){
        return (
            <div className="row"><strong>No Records Found!</strong></div>
        );
    }

    const deviceItems = props.devices.map((device) => {
        return (
            <DeviceItem key={device.name} device={device} onUserSelected={props.onDeviceSelect}
                        onDeviceStatusChange={props.onDeviceStatusChange}  />
        );
    });

    return (
        <div className="row">{deviceItems}</div>
    );
};

export default DeviceList;
