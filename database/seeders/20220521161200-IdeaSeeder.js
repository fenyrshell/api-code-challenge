'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Ideas', [
            {
                name: 'Idea Summary',
                image: null,
                username: 'Anonymous User',
                rating: 1,
                score: 0,
                assignees: 'Assignees',
                workflow: 'Idea Review/PLM II',
                createdAt: '2022-04-21 21:26:20'
            },
            {
                name: 'Idea Summary 2',
                image: null,
                username: 'Anonymous User 2',
                rating: 1,
                score: 0,
                assignees: 'Assignees 2',
                workflow: 'Idea Review/PLM II',
                createdAt: '2022-04-28 11:26:20'
            },
            {
                name: 'Idea Summary 3',
                image: null,
                username: 'Anonymous User 3',
                rating: 5,
                score: 0,
                assignees: 'Assignees 3',
                workflow: 'Idea Review/PLM II',
                createdAt: '2022-05-01 01:26:20'
            },
            {
                name: 'Idea Summary 4',
                image: null,
                username: 'Anonymous User 4',
                rating: 3,
                score: 0,
                assignees: 'Assignees 4',
                workflow: 'Idea Review/PLM II',
                createdAt: '2022-05-11 02:26:20'
            },
            {
                name: 'Idea Summary 5',
                image: null,
                username: 'Anonymous User 5',
                rating: 0,
                score: 0,
                assignees: 'Assignees 5',
                workflow: 'Idea Review/PLM II',
                createdAt: '2022-05-11 02:30:20'
            },
            {
                name: 'Idea Summary 6',
                image: null,
                username: 'Anonymous User',
                rating: 4,
                score: 0,
                assignees: 'Assignees',
                workflow: 'Idea Review/PLM II',
                createdAt: '2022-05-12 03:26:20'
            },
            {
                name: 'Idea Summary 7',
                image: null,
                username: 'Anonymous User 2',
                rating: 4,
                score: 0,
                assignees: 'Assignees 2',
                workflow: 'Idea Review/PLM II',
                createdAt: '2022-05-12 11:26:20'
            },
            {
                name: 'Idea Summary 8',
                image: null,
                username: 'Anonymous User 3',
                rating: 2,
                score: 0,
                assignees: 'Assignees 3',
                workflow: 'Idea Review/PLM II',
                createdAt: '2022-05-12 01:55:20'
            },
            {
                name: 'Idea Summary 9',
                image: null,
                username: 'Anonymous User 4',
                rating: 2,
                score: 0,
                assignees: 'Assignees 4',
                workflow: 'Idea Review/PLM II',
                createdAt: '2022-05-12 02:26:20'
            },
            {
                name: 'Idea Summary 10',
                image: null,
                username: 'Anonymous User 5',
                rating: 5,
                score: 0,
                assignees: 'Assignees 5',
                workflow: 'Idea Review/PLM II',
                createdAt: '2022-05-14 02:30:20'
            }
        ]);
    },


    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Ideas', null, {
            truncate: true
        });
    }
};
