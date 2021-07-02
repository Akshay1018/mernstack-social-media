import React, { useState, useEffect } from 'react'
import { Paper, Container, Grid, Grow, AppBar, TextField, Button } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import Posts from '../posts';
import Form from '../form';
import { getPosts } from '../../actions/posts'
import { useDispatch } from 'react-redux';
import Paginate from '../Pagination/Pagination'
import { classes } from 'istanbul-lib-coverage';
import useStyles from './styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Home = () => {
    const [currentId, setcurrentId] = useState(0);
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const classes = useStyles();

    const page = query.get('page') || 1;
    const serchQuery = query.get('serchQuery')
    const [search, setSearch] = useState('');
    const [tag, setTag] = useState([]);

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {

        }
    }
    const handleAdd = (tag) => {
        setTag([...tag, tag])
    }
    const handleDelete = (tagTodelete) => {
        setTag(tag.filter((tag) => tag !== tagTodelete));

    }

    return (

        <Grow in>
            <Container maxWidth='xl'>
                <Grid container justify='space-between' alignItems='stretch' spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setcurrentId={setcurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position="static" color='inherit'>
                            <TextField
                                name="search"
                                variant="outlined"
                                label="Search posts"
                                fullWidth
                                onKeyPress={handleKeyPress}
                                value={search}
                                onchange={(e) => setSearch(e.target.value)}
                            />
                            <ChipInput
                                style={{ margin: '10px 0' }}
                                value={tag}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                                variant="outlined"
                                label="Search Tags"
                            />
                        </AppBar>
                        <Form currentId={currentId} setcurrentId={setcurrentId} />
                        <Paper elevation={6}>
                            <Paginate />
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Grow>

    )
}

export default Home
