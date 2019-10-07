/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';

import { Provider as PaperProvider, DefaultTheme, FAB } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import TodoList from './src/components/Todolist/TodoList';

import TodoListHeader from './src/components/Todolist/TodoListHeader';
import TodoListBar from './src/components/Todolist/TodoListBar';
import TodoListAdd from './src/components/Todolist/TodoListAdd';
import Footer from './src/components/Footer/Footer';

import TodoListDetails from './src/components/Todolist/TodoListDetails';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



const bars = [
    { title: 'active', count: 2 },
    { title: 'done', count: 1 },

]
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'gold',
        accent: '#f1c40f',
        text: 'white'
    },
};


class Todo extends React.Component {
    state = {
        tasks: [
            {
                title: 'Today',
                tasks: [
                    {
                        id: '1',
                        title: 'study',
                        description: 'study react native',
                        status: 'completed',
                        deadline: '2019',
                    },
                    {
                        id: '2',
                        title: 'play Football',
                        description: 'play football',
                        status: 'active',
                        deadline: '2019',
                    },


                ]
            },
            {
                title: 'Next Days',
                tasks: [
                    {
                        id: '3',
                        title: 'Eat Lunch',
                        description: 'eat breakfast',
                        status: 'active',
                        deadline: '2019',
                    },
                    {
                        id: '4',
                        title: 'Swim',
                        description: 'eat breakfast',
                        status: 'active',
                        deadline: '2019',
                    },
                    {
                        id: '5',
                        title: 'Study React Native',
                        description: 'eat breakfast',
                        status: 'active',
                        deadline: '2019',
                    },
                    {
                        id: '6',
                        title: 'Task a Break Nerd !!!',
                        description: 'eat breakfast',
                        status: 'active',
                        deadline: '2019',
                    },
                    {
                        id: '7',
                        title: 'Business Meeting',
                        description: 'eat breakfast',
                        status: 'active',
                        deadline: '2019',
                    },
                    {
                        id: '8',
                        title: 'Sleeeeeeep Zzz',
                        description: 'eat breakfast',
                        status: 'active',
                        deadline: '2019',
                    },
                    {
                        id: '9',
                        title: 'Shut up',
                        description: 'eat breakfast',
                        status: 'active',
                        deadline: '2019',
                    },
                ]
            }
        ],

        activeIdx: 0,
        showForm: false,
        selectedTodo: true,
    }
    _onSearch = (text) => {

    }
    handleBarPress = (idx) =>
        this.setState({ activeIdx: idx });

    handleTaskCheck = (id) => {
        const tasks = [...this.state.tasks];
        let found = false
        for (let taskSection of tasks) {
            for (let task of taskSection.tasks) {
                if (task.id === id) {
                    found = true
                    task.status = task.status === "active" ? 'completed' : 'active'
                }
            }
            if (found) break
        }
        this.setState({ tasks: tasks })
    }
    handleTaskDelete = (id) => {
        const tasks = [...this.state.tasks];
        for (let taskSection of tasks)
            taskSection.tasks = taskSection.tasks.filter(task => task.id !== id)
        this.setState({ tasks: tasks })
    }
    getTasksWithStatus = (status) => {
        let tasks = [];
        for (let taskSection of this.state.tasks) {
            let dayTasks = []
            for (let task of taskSection.tasks) {
                if (task.status === status) {
                    dayTasks.push(task)
                }
            }
            tasks.push({ title: taskSection.title, tasks: dayTasks })
        }
        return tasks
    }
    getActiveTasks = () => this.getTasksWithStatus('active')
    getCompletedTasks = () => this.getTasksWithStatus('completed')

    handleAddTaskClose = () => this.setState({ showForm: false })

    handleDetailClose = () => this.setState({ isTodoSelected: false })
    handleTodoClick = (id) => {
        
        for (let taskSection of this.state.tasks) {
            for (let task of taskSection.tasks) {
                if (task.id === id) {
                    this.props.navigation.navigate('Details',{
                        task: task
                    })
                    return
                }
            }
        }


    }
    render() {
        let tasks = this.state.activeIdx === 0 ? this.getActiveTasks() : this.getCompletedTasks();

        console.log(this.getCompletedTasks().length)
        return (
            <>
                <TodoListBar
                    activeIdx={this.state.activeIdx}
                    bars={bars}
                    onPress={this.handleBarPress}
                />
                <TodoList
                    tasks={tasks}
                    onCheck={this.handleTaskCheck}
                    onDelete={this.handleTaskDelete}
                    onSelect={this.handleTodoClick}
                />
                <FAB
                    style={styles.fab}
                    icon="add"
                    onPress={() => this.setState({ showForm: true })}
                />
                <TodoListAdd visible={this.state.showForm} onClose={this.handleAddTaskClose} />
            </>
        );
    }
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },

});



let MainNavigator = createAppContainer(createStackNavigator({
    Home: { screen: Todo },
    Details: { screen: TodoListDetails }
},
    {
        defaultNavigationOptions: {
            header: props => <TodoListHeader renderBackButton={props.navigation.state.routes.length > 1}
            onBackClick={()=>props.navigation.goBack()} />
        }
    }
));

class App extends React.Component {
    state = {

    }

    render() {
        return (
            <PaperProvider
                theme={theme} settings={{
                    icon: props => <FontAwesome {...props} />,
                }}
            >
                <View style={{ height: '100%' }}>

                    <MainNavigator />
                    <Footer />
                </View>
            </PaperProvider>

        );
    }
}


export default App;
