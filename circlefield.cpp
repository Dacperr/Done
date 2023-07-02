#include <stdio.h>
#include <iostream>
#include <cstdlib>
#include <cmath>

using namespace std;

double PI=3.14;
float wynik;
int wybor;


void obliczObwod(double* promien, double* obwod) {
    *obwod = 2 * PI * *promien ;
}

void obliczPole(double* promien, double* pole) {
    *pole = PI * pow(*promien, 2);
}
   
int main()
{
    double promien;
    double pole, obwod;
for(;;)
{
  
    cout<<"Podaj promień koła: ";
    cin>> promien;
  
    cout<<endl;
    cout<<"~~~~~~~ MENU ~~~~~~~"<<endl;
    cout<<"[1]Oblicz obwód koła"<<endl;
    cout<<"[2]Oblicz pole koła"<<endl;
    cout<<"[3]Wyjdź"<<endl;
    cout<<"~~~~~~~~~~~~~~~~~~~~"<<endl;
    cout<<"Wybierz co chcesz zrobić: ";
    cin>>wybor;
  
    obliczObwod(&promien, &obwod);
    obliczPole(&promien, &pole);
  
    switch(wybor)
    {
        case 1:
            cout<<"Obwód koła wynosi " << obwod << endl;
            cout<<endl;
        break;
        case 2:
            cout<<"Pole koła wynosi " << pole << endl;
            cout<<endl;
        break;
        case 3:
            exit(0);
        break;
      
        default: cout<<"Nie ma takiej opcji!"<<endl;
      
    }
}
    return 0;
  
}