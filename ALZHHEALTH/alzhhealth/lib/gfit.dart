import 'package:flutter/material.dart';
import 'dart:math';
import 'dart:async';

class MonitoringDashboardScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return Stack(
      children: [
        Container(
          height: size.height,
          width: size.width,
          decoration: BoxDecoration(
            color: Color(0xfff2f4f8),
          ),
        ),
        Positioned(
          top: -350.0,
          right: -50.0,
          child: Container(
            height: size.height,
            width: size.width + 200,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: LinearGradient(
                  begin: Alignment.topRight,
                  end: Alignment.bottomLeft,
                  colors: [
                    Color(0xff0099BD),
                    Color(0xff00BF44),
                  ]),
            ),
          ),
        ),
        Scaffold(
          backgroundColor: Colors.transparent,
          appBar: AppBar(
            backgroundColor: Colors.transparent,
            elevation: 0.0,
            title: Text(
              'Today',
              style: Theme.of(context).primaryTextTheme.headline5,
            ),
            actions: [
              Icon(
                Icons.more_vert_outlined,
                color: Colors.white,
              )
            ],
            centerTitle: true,
            leading: Icon(
              Icons.arrow_back_ios,
              color: Colors.white,
            ),
          ),
          body: SingleChildScrollView(
            child: Padding(
              padding: const EdgeInsets.only(top: 8.0, left: 15.0, right: 15.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Hello, Jayit!',
                    style: TextStyle(
                        fontSize: 25.0,
                        color: Colors.white,
                        fontFamily: 'Montserrat',
                        fontWeight: FontWeight.w500),
                  ),
                  SizedBox(
              height: 15.0,
            ),
                  Text(
                    'Today\'s Report',
                    style: TextStyle(
                        fontSize: 20.0,
                        color: Colors.white,
                        fontFamily: 'Montserrat',
                        fontWeight: FontWeight.w500),
                  ),
                  SizedBox(
                    height: 30.0,
                  ),
                  ReportCard(),
                  SizedBox(
                    height: 20.0,
                  ),
                  Row(
                    children: [
                      BreakFastCard(),
                      Column(
                        children: [
                          CommonCard(
                            color: Color(0xff2194f9),
                            iconUrl: '6',
                            label: 'Lunch',
                          ),
                          CommonCard(color: Color(0xffFE4F6F),iconUrl: '4',
                          label: 'Dinner',
                          ),
                        ],
                      )
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
      ],
    );
  }
}

class ReportCard extends StatefulWidget {
  const ReportCard({Key key}) : super(key: key);

  @override
  _MyAppState createState() => _MyAppState();
 }

class _MyAppState extends State<ReportCard> {

  int steps=1;
  var rng = Random();
  Timer timer;
  int min = 44;
  int max = 48;
  int stress = 44;

  int min_bpm = 78;
  int max_bpm = 87;
  int bpm = 78;

  int min_spo = 78;
  int max_spo = 87;
  int spo = 78;
  @override
  void initState() {
    super.initState();
    timer = Timer.periodic(Duration(seconds: 5), (Timer t) => setState(() {
      steps = steps+1;
      stress = min + rng.nextInt(max - min);
      bpm = min_bpm + rng.nextInt(max_bpm - min_bpm);
      spo = min_spo + rng.nextInt(max_spo - min_spo);


    }));
  }

  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return Container(
      height: size.height * 0.8,
      width: size.width,
      decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20.0),
          color: Colors.white,
          boxShadow: [
            BoxShadow(
                color: Colors.grey[500], spreadRadius: 5.0, blurRadius: 20.0)
          ]),
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(
              height: 5.0,
            ),
            Center(child: CircularTrackingWidget()),
            Row(
              children: [
                DetailCard(),
                DetailCard(
                  color: Color(
                    0xffebfbf6,
                  ),
                  labelColor: Color(0xff3AD5A6),
                  label: 'Heart Points',
                  val1: steps.toString() + '/150',
                  val2: '',
                ),
                DetailCard(
                  color: Color(
                    0xffFFEDF0,
                  ),
                  labelColor: Color(0xffFE4F6F),
                  label: 'Stress Level',
                  val1: stress.toString() + '%',
                  val2: '',
                ),
                
              ],
            ),

            Row(
              children: [
                DetailCard1(),
                DetailCard(
                  color: Color(
                    0xffebfbf6,
                  ),
                  labelColor: Color(0xff3AD5A6),
                  label: 'SpO2 Level',
                  val1: spo.toString() + '%',
                  val2: '',
                ),
                DetailCard(
                  color: Color(
                    0xffFFEDF0,
                  ),
                  labelColor: Color(0xffFE4F6F),
                  label: 'Heart Rate',
                  val1: bpm.toString() + ' bpm',
                  val2: '',
                ),
                
              ],
            ),
            SizedBox(
              height: 15.0,
            ),
            Center(child: FlatButton(  
                child: Text('ALERT', style: TextStyle(fontSize: 20.0),),  
                onPressed: () {},  
              ),  ),
          ],
        ),
      ),
    );
  }
}

class CircularTrackingWidget extends StatelessWidget {
  const CircularTrackingWidget({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Stack(
        children: [
          Center(
            child: Container(
              height: 250.0,
              width: 290.0,
              decoration: BoxDecoration(
                  image: DecorationImage(
                image: AssetImage('assets/Group 2.png'),
                fit: BoxFit.fill,
              )),
            ),
          ),
          Positioned(
            top: 70.0,
            right: 97.0,
            child: Container(
              height: 150.0,
              width: 150.0,
              decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: Colors.white,
                  boxShadow: [
                    BoxShadow(
                      color: Colors.grey,
                      blurRadius: 10.0,
                    )
                  ]),
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      '938/2500',
                      style: TextStyle(
                          fontSize: 20.0,
                          color: Colors.black,
                          fontFamily: 'Montserrat',
                          fontWeight: FontWeight.w500),
                    ),
                    Text(
                      'Calories',
                      style: TextStyle(
                          fontSize: 16.0,
                          color: Colors.grey,
                          fontFamily: 'Montserrat',
                          fontWeight: FontWeight.w500),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class DetailCard extends StatelessWidget {
  final Color color;
  final String label;
  final Color labelColor;
  final String val1;
  final String val2;
  const DetailCard(
      {Key key, this.color, this.label, this.val1, this.val2, this.labelColor})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Container(
        height: 140.0,
        width: 100.0,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(12.0),
          color: color ?? Color(0xffe9f5ff),
        ),
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(
                height: 10.0,
              ),
              Container(
                height: 10.0,
                width: 10.0,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: labelColor ?? Colors.blueAccent,
                ),
              ),
              SizedBox(
                height: 20.0,
              ),
              Text(
                label ?? 'Step Count',
                style: TextStyle(
                    fontSize: 14.0,
                    color: labelColor ?? Colors.blueAccent,
                    fontFamily: 'Montserrat',
                    fontWeight: FontWeight.bold),
              ),
              SizedBox(
                height: 10.0,
              ),
              Text(
                val1 ?? '800/5000',
                style: TextStyle(
                    fontSize: 14.0,
                    color: Colors.black,
                    fontFamily: 'Montserrat',
                    fontWeight: FontWeight.w500),
              ),
              SizedBox(
                height: 10.0,
              ),
              Text(
                val2 ?? '',
                style: TextStyle(
                  fontSize: 14.0,
                  color: Colors.grey,
                  fontFamily: 'Montserrat',
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}



class DetailCard1 extends StatelessWidget {
  final Color color;
  final String label;
  final Color labelColor;
  final String val1;
  final String val2;
  const DetailCard1(
      {Key key, this.color, this.label, this.val1, this.val2, this.labelColor})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Container(
        height: 140.0,
        width: 100.0,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(12.0),
          color: color ?? Color(0xffe9f5ff),
        ),
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(
                height: 10.0,
              ),
              Container(
                height: 10.0,
                width: 10.0,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: labelColor ?? Colors.blueAccent,
                ),
              ),
              SizedBox(
                height: 20.0,
              ),
              Text(
                label ?? 'Temperature',
                style: TextStyle(
                    fontSize: 14.0,
                    color: labelColor ?? Colors.blueAccent,
                    fontFamily: 'Montserrat',
                    fontWeight: FontWeight.bold),
              ),
              SizedBox(
                height: 10.0,
              ),
              Text(
                val1 ?? '98.6 F',
                style: TextStyle(
                    fontSize: 14.0,
                    color: Colors.black,
                    fontFamily: 'Montserrat',
                    fontWeight: FontWeight.w500),
              ),
              SizedBox(
                height: 10.0,
              ),
              Text(
                val2 ?? '',
                style: TextStyle(
                  fontSize: 14.0,
                  color: Colors.grey,
                  fontFamily: 'Montserrat',
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class BreakFastCard extends StatelessWidget {
  const BreakFastCard({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8.0, right: 8.0),
      child: Container(
        height: 250.0,
        width: 180.0,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(12.0),
          color: Color(0xff3AD5A6),
        ),
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Image.asset(
                'assets/Group 5.png',
                height: 60,
                width: 60.0,
                fit: BoxFit.fill,
              ),
              SizedBox(
                height: 20.0,
              ),
              Text(
                'BreakFast',
                style: TextStyle(
                    fontSize: 20.0,
                    color: Colors.white,
                    fontFamily: 'Montserrat',
                    fontWeight: FontWeight.bold),
              ),
              Text(
                'Recommended:\n751 cals . 9g net carbs',
                style: TextStyle(
                  fontSize: 16.0,
                  color: Colors.white,
                  fontFamily: 'Montserrat',
                ),
              ),
              SizedBox(height:20.0,),
              Padding(
                padding: const EdgeInsets.all(4.0),
                child: Center(
                  child: Container(
                    height: 40.0,
                    width: 150.0,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(12.0),
                      border: Border.all(color: Colors.grey[200]),
                      gradient: LinearGradient(
                        colors: [
                          Color(0xff3AD5A6),
                          Color(0xff00BF44),
                        ]
                      )
                    ),
                    child: Center(child: Text('+ Add Beakfast', style: TextStyle(color: Colors.white),),),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}



class CommonCard extends StatelessWidget {
  final String label;
  final String iconUrl;
  final String val;
  final Color color;

  const CommonCard({Key key, this.label, this.iconUrl, this.val, this.color}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(left:2.0,bottom: 8.0, right: 2.0),
      child: Container(
        height: 120.0,
        width: 180.0,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(12.0),
          color: color??Color(0xff3AD5A6),
        ),
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  Image.asset(
                    'assets/Group ${iconUrl??'5'}.png',
                    height: 30,
                    width: 30.0,
                    fit: BoxFit.fill,
                  ),
                  Text(
                    label??'BreakFast',
                    style: TextStyle(
                        fontSize: 16.0,
                        color: Colors.white,
                        fontFamily: 'Montserrat',
                        fontWeight: FontWeight.bold),
                  ),
                  Icon(Icons.add,color: Colors.white,)
                ],
              ),
              SizedBox(
                height: 10.0,
              ),

              Text(
                val??'Recommended:\n751 cals . 9g net carbs',
                style: TextStyle(
                  fontSize: 16.0,
                  color: Colors.white,
                  fontFamily: 'Montserrat',
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}


//
//
