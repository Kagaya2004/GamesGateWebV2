<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\HttpResponseException;
use App\Models\Biblioteca;
use App\Http\Requests\StoreBibliotecaRequest;
use App\Http\Requests\UpdateBibliotecaRequest;
use Illuminate\Http\RedirectResponse;

class BibliotecaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $page = $request->get('page', '1');
        $pageSize = $request->get('pageSize', '5');
        $dir = $request->get('dir', 'asc');
        $props = $request->get('props', 'id');
        $search = $request->get('search', '');
        
        $query = Biblioteca::select('*')
            ->whereNull("deleted_at")
            ->OrderBy($props, $dir);

        $total = $query->count();
        $data = $query->offset( ($page - 1) * $pageSize)
            ->limit($pageSize)
            ->get();
        $totalPages = ceil($total / $pageSize);
        
        
        return response()->json([
            'message'=>'Relatório de Bibliotecas',
            'status'=>200,
            'page'=>$page,
            'pageSize'=>$pageSize,
            'dir'=>$dir,
            'props'=>$props,
            'search'=>$search,
            'total'=>$total,
            'totalPages'=>$totalPages,
            'data'=>$data
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBibliotecaRequest $request): RedirectResponse
    {
        $validator = $request->validated();

        if ($validator->fails()) {

            return response()->json([
                'message'=>"Erro nas informações da Biblioteca",
                'status'=>404,
                'errors'=>$validator->errors()
            ],404);
        }

        $data = Biblioteca::create($request->all());
        return response()->json([
            'message'=>'Biblioteca criada com sucesso',
            'status'=>200,
            'data'=>$data
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        $data = Biblioteca::find($id);
        if (!$data) {
            return response()->json([
                'message'=>'Biblioteca não encontrada',
                'status'=>404,
                'data'=>$id
            ],404);
        }

        return response()->json([
            'message'=>'Biblioteca encontrada',
            'status'=>200,
            'data'=>$data
        ],200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBibliotecaRequest $request, string $id)
    {
        $validator = $request->validated();
        $data = Biblioteca::find($id);

        if (!$data) {
            return response()->json([
                'message'=>'Biblioteca não encontrada',
                'data'=>$id,
                'status'=>404,
            ],404);
        }

        $data->update($request->all());

        return response()->json([
            'message'=>'Biblioteca atualizada com sucesso',
            'status'=>201,
            'data'=>$data
        ],201);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        $data = Biblioteca::find($id);
        if (!$data) {
            return response()->json([
                'message'=>'Biblioteca não encontrada',
                'data'=>$id,
                'status'=>404,
            ],404);
        }
        $data->delete();
        return response()->json([
            'message'=>'Biblioteca deletada com sucesso',
            'status'=>200,
            'data'=>$data
        ],200);
    }
}
