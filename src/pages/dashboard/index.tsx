import { Card, Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get_user_post_comment_album_photo_todo_length } from '../../services/actions/counter_action';

const Dashboard = () => {
    const {
        is_loading,
        dashboard_data,
    } = useSelector((state: any) => state.counter_reducer);
    const dispatch: any = useDispatch();
    useEffect(() => {
        dispatch(get_user_post_comment_album_photo_todo_length())
    }, []);
    // console.log({dashboard_data});
    
    return (
        <React.Fragment>
            <Card 
                title={<h3>Dashboard</h3>}
                loading={is_loading && !dashboard_data?.length}
                bordered={false}
            >
                <Row gutter={32}>
                    {
                        dashboard_data.map((data: any, index: number) => {
                            return (
                                <Col key={index} md={12} span={8} xs={24} lg={8}>
                                    <Card
                                        bordered={true}
                                        loading={is_loading}
                                        className="bg-light p-2 my-3"
                                    >
                                        <h4 className='data-title'>{data?.title}</h4>
                                        <h5 className='data-length'>{data?.length}</h5>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                    
                </Row>
            </Card>
        </React.Fragment>
    );
};

export default Dashboard;