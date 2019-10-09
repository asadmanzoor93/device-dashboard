import React from 'react';

const DeviceDetail = (props) => {
    const device = props.device;

    if(!device) {
        return <div> </div>
    }

    return (
        <div>
            <h1> Selected Device Information </h1>
            <hr/>
            <div>
                <div>
                    <span>
                        <strong>Title: </strong>
                        {device.name}
                    </span>
                    </div>
                <div>
                    <span>
                        <strong>Units: </strong>
                        {device.unit}
                    </span>
                </div>

                <div>
                    <span>
                        <strong>Value: </strong>
                        {device.value}
                    </span>
                </div>

                <div>
                    <span>
                        <strong>Timestamp: </strong>
                        {new Date(device.timestamp).toString()}
                    </span>
                </div>

                <div>
                    <span>
                        <strong>Status: </strong>
                        {(device.active) ? 'True': 'False'}
                    </span>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default DeviceDetail;
