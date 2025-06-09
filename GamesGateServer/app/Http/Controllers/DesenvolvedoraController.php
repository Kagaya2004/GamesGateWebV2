<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\HttpException;
use App\Models\Desenvolvedora;
use App\Http\Requests\StoreDesenvolvedoraRequest;
use App\Http\Requests\UpdateDesenvolvedoraRequest;
use Illuminate\Http\RedirectResponse;

class DesenvolvedoraController extends Controller
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
        
        $query = Desenvolvedora::select('*')
            ->whereNull("deleted_at")
            ->OrderBy($props, $dir);

        $total = $query->count();
        $data = $query->offset( ($page - 1) * $pageSize)
            ->limit($pageSize)
            ->get();
        $totalPages = ceil($total / $pageSize);
        
        
        return response()->json([
            'message'=>'Relatório de Desenvolvedoras',
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
    public function store(StoreDesenvolvedoraRequest $request): RedirectResponse
    {
        $validator = $request->validated();

        $data = Desenvolvedora::create($request->all());

        $data->senha = Hash::make($request->senha);
        $data->save();
        return response()->json([
            'message'=>'Desenvolvedora cadastrado com sucesso',
            'status'=>200,
            'data'=>$data
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id)
    {
        try{
            $data = Desenvolvedora::findOrfail($id);
        } catch (HttpResponseException $e) {
            response()->json([
                'message'=>$e->getMessage(),
                'status'=>404
            ],404);
        }
        
        return response()->json([
            'message'=>'Desenvolvedora encontrado com sucesso',
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
    public function update(UpdateDesenvolvedoraRequest $request, string $id)
    {
        $validator = $request->validated();
        
        // pega o id do desenvolvedora no banco de dados
        $data = Desenvolvedora::Find($id);
        // verifica se o desenvolvedora existe
        if (!$data) {
            return response()->json([
                'message'=>'Desenvolvedora não localizado',
                'data'=>$id,
                'status'=>404
            ],404);
        }

        $data->nome = $request->nome ?? $data->nome;
        $data->email = $request->email ?? $data->email;
        $data->descricao = $request->descricao ?? $data->descricao;
        $data->pais = $request->pais ?? $data->pais;
        $data->site = $request->site ?? $data->site;
        if ($request->has('senha')) {
            $data->senha = Hash::make($request->senha);
        }

        $data->save();
        return response()->json([
            'message'=>'Desenvolvedora atualizada com sucesso',
            'status'=>201,
            'data'=>$data
        ],201);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        $data = Desenvolvedora::find($id);
        if (!$data) {
            return response()->json([
                'message'=>'Desenvolvedora não encontrada',
                'data'=>$id,
                'status'=>404,
            ],404);
        }
        $data->delete();
        return response()->json([
            'message'=>'Desenvolvedora deletada com sucesso',
            'status'=>200,
            'data'=>$data
        ],200);
    }
}
