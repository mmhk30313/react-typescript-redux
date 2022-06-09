import React from 'react';
import { Modal } from 'antd';
const AntModal = ({visibleModal, setVisibleModal, data_title, width, children}: any) => {
    console.log({data_title, visibleModal});
    
    return (
        <Modal
            title={data_title || false}
            visible={visibleModal}
            onCancel={() => setVisibleModal()}
            // onOk={() => setVisibleModal(false)}
            footer={null}
            width={width || 740}
        >
            {
                children
            }
        </Modal>
    );
};

export default AntModal;