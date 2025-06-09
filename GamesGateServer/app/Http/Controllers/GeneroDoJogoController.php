<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GeneroDoJogo;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\HttpException;
use App\Http\Requests\StoreGeneroDoJogoRequest;
use App\Http\Requests\UpdateGeneroDoJogoRequest;
use Illuminate\Http\RedirectResponse;

class GeneroDoJogoController extends Controller
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

        $query = GeneroDoJogo::select("*")
            ->whereNull("deleted_at")
            ->OrderBy($props, $dir);

        $total = $query->count();

        $data = $query->offset(($page - 1) * $pageSize)
            ->limit($pageSize)
            ->get();

        $totalPages = ceil($total / $pageSize);

        return response()->json([
            'message' => 'Conexão entre Gênero e Jogo',
            'status' => 200,
            'page' => $page,
            'pageSize' => $pageSize,
            'dir' => $dir,
            'props' => $props,
            'search' => $search,
            'total' => $total,
            'totalPages' => $totalPages,
            'data' => $data
        ], 200);
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
    public function store(StoreGeneroDoJogoRequest $request) 
    {
        $validator = $request->validated();

        $data = GeneroDoJogo::create([
            'jogo_id' => $request->jogo_id,
            'genero_id' => $request->genero_id,
        ]);

        return response()->json([
            'message' => 'Conexão criada com sucesso',
            'status' => 200,
            'data' => $data
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        try {
            $data = GeneroDoJogo::findOrFail($id);
        } catch (HttpException $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status' => 404
            ], 404);
        }

        return response()->json([
            'message' => 'Conexão encontrada com sucesso',
            'status' => 200,
            'data' => $data
        ], 200);
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
    public function update(UpdateGeneroDoJogo $request, string $id) : RedirectResponse
    {
        $validator = $request->validated();

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Erro nas informações na conexão da categoria com a comunidade',
                'status' => 404,
                'errors' => $validator->errors()
            ], 404);
        }

        $data = GeneroDoJogo::find($id);

        if (!$data) {
            return response()->json([
                'message' => 'Conexão não encontrada',
                'status' => 404
            ], 404);
        }

        $data->update($request->all());

        return response()->json([
            'message' => 'Conexão atualizada com sucesso',
            'status' => 200,
            'data' => $data
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = GeneroDoJogo::find($id);
        if (!$data) {
            return response()->json([
                'message'=>'Conexão não localizada',
                'data'=>$id,
                'status'=>404
            ],404);
        }
        $data->delete();
        return response()->json([
            'message'=>'Conexão excluída com sucesso',
            'status'=>200,
            'data'=>$data
        ], 200);
    }
}
