"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require("./faker.zh_CN");
var posts_1 = require("./types/posts");
var helper_1 = require("./helper");
var mocker = {
    post: function (id) {
        var createAt = faker.date.past(), createAtStr = helper_1.smartDate(createAt);
        return {
            banner: faker.image.image(),
            createAt: createAt,
            createAtStr: createAtStr,
            id: id || faker.random.number(),
            text: faker.lorem.paragraph(),
            title: faker.lorem.sentence(),
            type: posts_1.EPostType.Normal,
            user: mocker.user(),
            counter: {
                view: faker.random.number(),
                join: faker.random.number(),
                hot: false,
            }
        };
    },
    repeat: function (n, fn) {
        return Array(n).fill(0).map(function (_, id) { return fn(id); });
    },
    topic: function (id) {
        var createAt = faker.date.past(), createAtStr = helper_1.smartDate(createAt);
        return {
            banner: faker.image.image(),
            createAt: createAt,
            createAtStr: createAtStr,
            id: id || faker.random.number(),
            text: faker.lorem.paragraph(),
            title: faker.lorem.sentence(),
            type: posts_1.EPostType.Normal,
            user: mocker.user(),
        };
    },
    user: function (id) {
        return {
            avatar: faker.image.avatar(),
            id: id || faker.random.number(),
            name: faker.name.findName(),
            followStatus: 0,
            status: 0
        };
    },
};
exports.default = mocker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxQ0FBdUM7QUFFdkMsdUNBQWdEO0FBRWhELG1DQUFxQztBQUVyQyxJQUFNLE1BQU0sR0FBRztJQUNiLElBQUksRUFBSixVQUFLLEVBQVc7UUFDZCxJQUFJLFFBQVEsR0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUMxQixXQUFXLEdBQUMsa0JBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxPQUFPO1lBRUwsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBRzNCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLEVBQUUsRUFBRSxFQUFFLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDL0IsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQzdCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUM3QixJQUFJLEVBQUUsaUJBQVMsQ0FBQyxNQUFNO1lBQ3RCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ25CLE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQzNCLElBQUksRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDM0IsR0FBRyxFQUFFLEtBQUs7YUFDWDtTQUNGLENBQUE7SUFDSCxDQUFDO0lBQ0QsTUFBTSxFQUFOLFVBQVUsQ0FBUyxFQUFFLEVBQXNCO1FBQ3pDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsRUFBRSxJQUFLLE9BQUEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFOLENBQU0sQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFDRCxLQUFLLEVBQUwsVUFBTSxFQUFXO1FBQ2YsSUFBSSxRQUFRLEdBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFDOUIsV0FBVyxHQUFDLGtCQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsT0FBTztZQUNMLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtZQUMzQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsV0FBVztZQUN4QixFQUFFLEVBQUUsRUFBRSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQy9CLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUM3QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDN0IsSUFBSSxFQUFFLGlCQUFTLENBQUMsTUFBTTtZQUN0QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRTtTQUNwQixDQUFBO0lBQ0gsQ0FBQztJQUNELElBQUksRUFBSixVQUFLLEVBQVc7UUFDZCxPQUFPO1lBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQzVCLEVBQUUsRUFBRSxFQUFFLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDL0IsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzNCLFlBQVksRUFBRSxDQUFDO1lBQ2YsTUFBTSxFQUFFLENBQUM7U0FDVixDQUFBO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFFRCxrQkFBZSxNQUFNLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2dpdGh1Yi5jb20vTWFyYWsvZmFrZXIuanNcclxuaW1wb3J0IGZha2VyID0gcmVxdWlyZSgnLi9mYWtlci56aF9DTicpXHJcblxyXG5pbXBvcnQgeyBFUG9zdFR5cGUsIElQb3N0IH0gZnJvbSAnLi90eXBlcy9wb3N0cydcclxuaW1wb3J0IHsgSVVzZXIgfSBmcm9tICcuL3R5cGVzL3VzZXInXHJcbmltcG9ydCB7IHNtYXJ0RGF0ZSB9IGZyb20gJy4vaGVscGVyJztcclxuXHJcbmNvbnN0IG1vY2tlciA9IHtcclxuICBwb3N0KGlkPzogbnVtYmVyKTogSVBvc3Qge1xyXG4gICAgbGV0IGNyZWF0ZUF0PWZha2VyLmRhdGUucGFzdCgpLFxyXG4gICAgICAgIGNyZWF0ZUF0U3RyPXNtYXJ0RGF0ZShjcmVhdGVBdCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAvLyBiYW5uZXI6IE1hdGgucmFuZG9tKCkgPiAwLjMgPyBmYWtlci5pbWFnZS5pbWFnZSgpIDogdW5kZWZpbmVkLFxyXG4gICAgICBiYW5uZXI6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbiAgICAgIC8vIGNyZWF0ZUF0OiBmYWtlci5kYXRlLnBhc3QoKSxcclxuICAgICAgLy8gY3JlYXRlQXRTdHI6IHNtYXJ0RGF0ZShjcmVhdGVBdCksXHJcbiAgICAgIGNyZWF0ZUF0OiBjcmVhdGVBdCxcclxuICAgICAgY3JlYXRlQXRTdHI6IGNyZWF0ZUF0U3RyLFxyXG4gICAgICBpZDogaWQgfHwgZmFrZXIucmFuZG9tLm51bWJlcigpLFxyXG4gICAgICB0ZXh0OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgICAgdGl0bGU6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICAgIHR5cGU6IEVQb3N0VHlwZS5Ob3JtYWwsXHJcbiAgICAgIHVzZXI6IG1vY2tlci51c2VyKCksXHJcbiAgICAgIGNvdW50ZXI6IHtcclxuICAgICAgICB2aWV3OiBmYWtlci5yYW5kb20ubnVtYmVyKCksXHJcbiAgICAgICAgam9pbjogZmFrZXIucmFuZG9tLm51bWJlcigpLFxyXG4gICAgICAgIGhvdDogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHJlcGVhdDxUPihuOiBudW1iZXIsIGZuOiAoaWQ/OiBudW1iZXIpID0+IFQpOiBUW10ge1xyXG4gICAgcmV0dXJuIEFycmF5KG4pLmZpbGwoMCkubWFwKChfLCBpZCkgPT4gZm4oaWQpKVxyXG4gIH0sXHJcbiAgdG9waWMoaWQ/OiBudW1iZXIpOiBJUG9zdCB7XHJcbiAgICBsZXQgY3JlYXRlQXQ9ZmFrZXIuZGF0ZS5wYXN0KCksXHJcbiAgICBjcmVhdGVBdFN0cj1zbWFydERhdGUoY3JlYXRlQXQpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmFubmVyOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gICAgICBjcmVhdGVBdDogY3JlYXRlQXQsXHJcbiAgICAgIGNyZWF0ZUF0U3RyOiBjcmVhdGVBdFN0cixcclxuICAgICAgaWQ6IGlkIHx8IGZha2VyLnJhbmRvbS5udW1iZXIoKSxcclxuICAgICAgdGV4dDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICAgIHRpdGxlOiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgICB0eXBlOiBFUG9zdFR5cGUuTm9ybWFsLFxyXG4gICAgICB1c2VyOiBtb2NrZXIudXNlcigpLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXNlcihpZD86IG51bWJlcik6IElVc2VyIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGF2YXRhcjogZmFrZXIuaW1hZ2UuYXZhdGFyKCksXHJcbiAgICAgIGlkOiBpZCB8fCBmYWtlci5yYW5kb20ubnVtYmVyKCksXHJcbiAgICAgIG5hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgICAgZm9sbG93U3RhdHVzOiAwLFxyXG4gICAgICBzdGF0dXM6IDBcclxuICAgIH1cclxuICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb2NrZXJcclxuIl19