import 'package:flutter/material.dart';
import 'gfit.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        bottomSheetTheme:
            BottomSheetThemeData(backgroundColor: Colors.transparent),
        primarySwatch: Colors.red,
      ),
      home: MonitoringDashboardScreen(),
    );
  }
}
