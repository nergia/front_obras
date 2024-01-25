import ContactList from '../components/ContactList'
import AddContact from '../components/AddContact'
import EditContact from '../components/EditContact'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes =[
    {
        name:'ContactList',
        path:'/',
        component: ContactList
    },
    {
        name:'AddContact',
        path:'/add_contacts',
        component: AddContact
    },
    {
        name:'EditContact',
        path:'/contact/edit/:id?',
        component: EditContact
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;