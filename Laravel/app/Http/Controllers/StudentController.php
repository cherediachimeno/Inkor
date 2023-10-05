<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = Student::all();
        return view('student.list', compact('students', 'students'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('student.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'txtFirstName'=>'required',
            'txtLastName'=>'required',
            'txtAddress'=>'required'
        ]);

        $student = new Student([
            'first_name'=> $request->get('txtFirstName'),
            'last_name'=> $request->get('txtLastName'),
            'address'=> $request->get('txtAddress')
        ]);

        $student->save();
        return redirect('/student')->with('success', 'Student has been added');
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        return view('student.view', compact('student'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {
        return view('student.edit', compact('student'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {
        $request->validate([
            'txtFirstName'=>'required',
            'txtLastName'=>'required',
            'txtAddress'=>'required'
        ]);

        $student = Student::find($id);
        $student->first_name = $request->get('txtFirstName');
        $student->last_name = $request->get('txtLastName');
        $student->address = $request->get('txtAddress');

        $student->update();
        return redirect('/student')->with('success', 'Student has been updated');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        $student->delete();
        return redirect('/student')->with('success', 'Student has been deleted');
    }
}
