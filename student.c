#include <stdio.h>

struct student
{
    char name[100];
    int age;
    float avg_mark;
};

int main()
{
    setbuf(stdout, NULL);
    struct student st1;
    printf("Enter a Student Name: ");
    fgets(st1.name, 100, stdin);
    printf("Enter Student's Age : ");
    scanf("%d", &st1.age);
    printf("Enter Student's Average Mark : ");
    scanf("%f", &st1.avg_mark);
    printf("Student's Name : %s", st1.name);
    printf("Student's Age : %d\n", st1.age);
    printf("Student's Average Mark : %f\n", st1.avg_mark);
    return 0;
}