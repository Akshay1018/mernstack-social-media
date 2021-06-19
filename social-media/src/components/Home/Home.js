import React, { useState, useEffect } from 'react'
import { Container, Grid, Grow } from '@material-ui/core';
import Posts from '../posts';
import Form from '../form';
import { getPosts } from '../../actions/posts'
import { useDispatch } from 'react-redux';

function Home() {
    const [currentId, setcurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])
    return (

        <Grow in>
            <Container>
                <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setcurrentId={setcurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setcurrentId={setcurrentId} />
                    </Grid>

                </Grid>
            </Container>
        </Grow>

    )
}

export default Home